const { basename, dirname, join } = require('path')
const { outputFile, remove } = require('fs-extra')
const Core = require('@uiengine/core/src/core')
const glob = require('globby')
const {
  YamlUtil,
  MessageUtil: { reportSuccess, reportError }
} = require('@uiengine/util')

exports.describe = 'Replaces data.yml files with data.js'

exports.handler = async argv => {
  try {
    const state = await Core.init(argv)
    const { config: { source } } = state

    const pattern = join(source.data, '**', '*.yml')
    const filePaths = await glob(pattern, { onlyFiles: true })

    filePaths.forEach(async ymlPath => {
      const entityPath = dirname(ymlPath)
      const jsPath = join(entityPath, `${basename(ymlPath, '.yml')}.js`)
      const attributes = await YamlUtil.fromFile(ymlPath)

      await Promise.all([
        outputFile(jsPath, 'module.exports = ' + JSON.stringify(attributes, null, 2) + '\n')
      ])
      await remove(ymlPath)
    })

    reportSuccess('Migration succeeded. The data.yml files have been replaced with data.js files.')
  } catch (err) {
    reportError('Migrating the component.md files failed!', err)
    process.exit(1)
  }
}
