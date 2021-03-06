const yargsInteractive = require('yargs-interactive')
const chalk = require('chalk')
const Joi = require('joi')
const options = {
  interactive: { default: true },
  name: {
    type: 'input',
    default: '',
    describe: chalk.bgBlackBright(chalk.greenBright('Enter app name (required field, defaults to sample-app):'))
  },
  author: {
    type: 'input',
    default: '',
    describe: chalk.bgBlackBright(chalk.greenBright('Enter author\'s name:'))
  },
  description: {
    type: 'input',
    default: '',
    describe: chalk.bgBlackBright(chalk.greenBright('Enter project description'))
  },
  license: {
    type: 'input',
    default: '',
    describe: chalk.bgBlackBright(chalk.greenBright('Enter license'))
  }
}

const readCli = () => {
   return yargsInteractive()
    .usage('$0 <command> [args]')
    .interactive(options)      
    .then((result)=>{
      if(!validInput(result.name)) result.name = 'sample-app'
      return result
    })
}

const validInput = (name) => {
  if(!name) return false
  const res = Joi.validate(name,Joi.string().regex(/^[^A-Z]+$/).required())
  return res.error === null
}

module.exports = readCli
