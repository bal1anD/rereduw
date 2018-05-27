/**
 * Creates a react-redux-webpack app with webpack.config
 */

const { copyDir, writeToFile } = require('../helpers/file-util')
const readCli = require('../helpers/read-cli')

const initApp = async () => {
  const SOURCE_PATH = '../../skeleton'
  const DESTINATION_PATH = '../../sample-app/'
  const PKG_JSON_PATH = DESTINATION_PATH + 'package.json'
  try {
    const result =  await readCli()
    await copyDir(SOURCE_PATH, DESTINATION_PATH)
    const pkgJson = require(PKG_JSON_PATH)
    pkgJson.name = result.name
    pkgJson.author = result.author
    pkgJson.description = result.description
    pkgJson.license = result.license
    writeToFile(PKG_JSON_PATH, pkgJson)
  } catch (err) {
    console.log(`Could not generate project ${err}`)
  }
}

module.exports = initApp

