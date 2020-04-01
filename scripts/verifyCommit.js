// Invoked on the commit-msg git hook by yorkie.

const chalk = require('chalk')
const path = require('path')
const msgPath = process.env.GIT_PARAMS
const pkgDir = path.resolve()
const pkg = require(`${pkgDir}/package.json`)
const log = require('nv-log').log
const logger = log({name: pkg.name})

const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|Merge)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  logger.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(v-model): handle events on blur (close #28)`
      )}\n\n` +
      chalk.red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1)
}
