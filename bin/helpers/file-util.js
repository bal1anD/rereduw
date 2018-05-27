const ncp = require('ncp')
const { writeFileSync } = require('fs')
const { join } = require('path')

const writeToFile = (fileName, data = {}) => {
  const filePath = join(__dirname, fileName)
  try {
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
  } catch (err) {
    console.log(`Could not write to package.json ${err}`)
  }
}

const copyDir = (source, destination) => {
  const sourcePath = join(__dirname, source)
  const destPath = join(__dirname, destination)
  return new Promise((resolve, reject) => {
    ncp(sourcePath, destPath, function (err) {
      if (err) {
        return reject(err)
      }
      return resolve('Done')
    })
  })
}

module.exports = {
  writeToFile,
  copyDir
}
