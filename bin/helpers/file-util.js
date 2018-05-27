const ncp = require('ncp')
const { writeFileSync } = require('fs')
const { join } = require('path')

const writeToFile = (filePath, data = {}) => {
  try {
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
  } catch (err) {
    console.log(`Could not write to package.json ${err}`)
  }
}

const copyDir = (source, destination) => {
  const sourcePath = join(__dirname, source)
  return new Promise((resolve, reject) => {
    ncp(sourcePath, destination, function (err) {
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
