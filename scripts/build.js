const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const log = require('nv-log').log
const pkgDir = path.resolve()
const pkg = require(`${pkgDir}/package.json`)
const execa = require('execa')
const { gzipSync } = require('zlib')
const { compress } = require('brotli')
const args = require('minimist')(process.argv.slice(2))

const formats = args.formats || args.f
const devOnly = args.devOnly || args.d
const prodOnly = !devOnly && (args.prodOnly || args.p)
const buildTypes = args.t || args.types || true
const logger = log({name: pkg.name})
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)
run()

async function run() {
    await build('src')
    checkSize(pkg.name)
}
  
async function build(target) {
    // if building a specific format, do not remove dist.
    if (!formats) {
      await fs.remove(`${pkgDir}/dist`)
    }

    const env =
      (pkg.buildOptions && pkg.buildOptions.env) ||
      (devOnly ? 'development' : 'production')
    await execa(
      'rollup',
      [
        '-c',
        '--environment',
        [
          `COMMIT:${commit}`,
          `NODE_ENV:${env}`,
          `TARGET:${target}`,
          formats ? `FORMATS:${formats}` : ``,
          buildTypes ? `TYPES:true` : ``,
          prodOnly ? `PROD_ONLY:true` : ``,
        ]
          .filter(Boolean)
          .join(',')
      ],
      { stdio: 'inherit' }
    )
  
    if (buildTypes && pkg.types) {
      logger.info(
        chalk.bold(chalk.yellow(`Rolling up type definitions for ${target}...`))
      )
  
      // build types
      const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor')
  
      const extractorConfigPath = path.resolve(pkgDir, `api-extractor.json`)
      const extractorConfig = ExtractorConfig.loadFileAndPrepare(
        extractorConfigPath
      )
      const result = Extractor.invoke(extractorConfig, {
        localBuild: true,
        showVerboseMessages: true
      })
  
      if (result.succeeded) {
        // concat additional d.ts to rolled-up dts (mostly for JSX)
        if (pkg.buildOptions && pkg.buildOptions.dts) {
          const dtsPath = path.resolve(pkgDir, pkg.types)
          const existing = await fs.readFile(dtsPath, 'utf-8')
          const toAdd = await Promise.all(
            pkg.buildOptions.dts.map(file => {
              return fs.readFile(path.resolve(pkgDir, file), 'utf-8')
            })
          )
          await fs.writeFile(dtsPath, existing + '\n' + toAdd.join('\n'))
        }
        logger.info(
          chalk.bold(chalk.green(`API Extractor completed successfully.`))
        )
      } else {
        logger.error(
          // @ts-ignore
          `API Extractor completed with ${extractorResult.errorCount} errors` +
            // @ts-ignore
            ` and ${extractorResult.warningCount} warnings`
        )
        process.exitCode = 1
      }
      await fs.remove(`${pkgDir}/dist/packages`)
    }
}
function checkSize(target) {
    const esmProdBuild = `${pkgDir}/dist/${target}.esm-bundler.js`
    if (fs.existsSync(esmProdBuild)) {
        const file = fs.readFileSync(esmProdBuild)
        const minSize = (file.length / 1024).toFixed(2) + 'kb'
        const gzipped = gzipSync(file)
        const gzippedSize = (gzipped.length / 1024).toFixed(2) + 'kb'
        const compressed = compress(file)
        const compressedSize = (compressed.length / 1024).toFixed(2) + 'kb'
        logger.info(
            `${chalk.gray(
                chalk.bold(target)
            )} min:${chalk.green(minSize)} / gzip:${chalk.green(minSize)} / brotli:${chalk.green(compressedSize)}`
        )
    }
}