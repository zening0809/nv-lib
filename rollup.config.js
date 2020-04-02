import path from 'path'
import ts from 'rollup-plugin-typescript2'
import replace from 'rollup-plugin-replace'
import alias from 'rollup-plugin-alias'
import json from 'rollup-plugin-json'

const packageDir = path.resolve()
const name = 'nv-lib'
const resolve = p => path.resolve(packageDir, p)
const pkg = require(resolve(`package.json`))
const packageOptions = pkg.buildOptions || {}

// build aliases dynamically
const aliasOptions = { resolve: ['.ts'] }
const aliasPlugin = alias(aliasOptions)
// ensure TS checks only once for each build
let hasTSChecked = false
const configs = {
    esm: {
      file: resolve(`dist/${name}.esm-bundler.js`),
      format: `es`
    },
    cjs: {
      file: resolve(`dist/${name}.cjs.js`),
      format: `cjs`
    },
    global: {
      file: resolve(`dist/${name}.global.js`),
      format: `iife`
    },
    'esm-browser': {
      file: resolve(`dist/${name}.esm-browser.js`),
      format: `es`
    }
}

const defaultFormats = ['esm', 'cjs']
const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(',')
const packageFormats = inlineFormats || packageOptions.formats || defaultFormats

const packageConfigs = process.env.PROD_ONLY
  ? []
  : packageFormats.map(format => createConfig(configs[format]))

if (process.env.NODE_ENV === 'production') {
  packageFormats.forEach(format => {
    if (format === 'cjs' && packageOptions.prod !== false) {
      packageConfigs.push(createProductionConfig(format))
    }
    if (format === 'global' || format === 'esm-browser') {
      packageConfigs.push(createMinifiedConfig(format))
    }
  })
}

export default packageConfigs

function createConfig(output, plugins = []) {
    output.externalLiveBindings = false
  
    const isProductionBuild =
      process.env.__DEV__ === 'false' || /\.prod\.js$/.test(output.file)
    const isGlobalBuild = /\.global(\.prod)?\.js$/.test(output.file)
    const isBundlerESMBuild = /\.esm-bundler\.js$/.test(output.file)
    const isBrowserESMBuild = /esm-browser(\.prod)?\.js$/.test(output.file)
    if (isGlobalBuild) {
      output.name = packageOptions.name
    }
  
    const shouldEmitDeclarations =
      process.env.TYPES != null &&
      process.env.NODE_ENV === 'production' &&
      !hasTSChecked
  
    const tsPlugin = ts({
      check: process.env.NODE_ENV === 'production' && !hasTSChecked,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
      tsconfigOverride: {
        compilerOptions: {
          declaration: shouldEmitDeclarations,
          declarationMap: shouldEmitDeclarations
        },
        exclude: ['src/**/__test__']
      }
    })
    // we only need to check TS and generate declarations once for each build.
    // it also seems to run into weird issues when checking multiple times
    // during a single build.
    hasTSChecked = true
  
    const externals = Object.keys(aliasOptions)
      .concat(Object.keys(pkg.dependencies || []))
  
    return {
      input: resolve(`src/index.ts`),
      // Global and Browser ESM builds inlines everything so that they can be
      // used alone.
      external: isGlobalBuild || isBrowserESMBuild ? [] : externals,
      plugins: [
        json({
          // @ts-ignore
          namedExports: false
        }),
        tsPlugin,
        aliasPlugin,
        createReplacePlugin(
          isProductionBuild,
          isBundlerESMBuild,
          (isGlobalBuild || isBrowserESMBuild) &&
            !packageOptions.enableNonBrowserBranches,
        ),
        ...plugins
      ],
      output,
      onwarn: (msg, warn) => {
        if (!/Circular/.test(msg)) {
          warn(msg)
        }
      }
    }
}

function createReplacePlugin(
    isProduction,
    isBundlerESMBuild,
    isBrowserBuild
  ) {
    return replace({
      __COMMIT__: `"${process.env.COMMIT}"`,
      __VERSION__: `"${pkg.version}"`,
      // @ts-ignore
      __DEV__: isBundlerESMBuild
        ? // preserve to be handled by bundlers
          `(process.env.NODE_ENV !== 'production')`
        : // hard coded dev/prod builds
          !isProduction,
      // this is only used during tests
      // @ts-ignore
      __TEST__: isBundlerESMBuild ? `(process.env.NODE_ENV === 'test')` : false,
      // If the build is expected to run directly in the browser (global / esm-browser builds)
      __BROWSER__: isBrowserBuild
    })
}
  
function createProductionConfig(format) {
    return createConfig({
      file: resolve(`dist/${name}.${format}.prod.js`),
      format: configs[format].format
    })
}
  
function createMinifiedConfig(format) {
    const { terser } = require('rollup-plugin-terser')
    return createConfig(
      {
        file: resolve(`dist/${name}.${format}.prod.js`),
        format: configs[format].format
      },
      [
        terser({
          module: /^esm/.test(format)
        })
      ]
    )
}