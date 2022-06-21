const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const hinataLog = (text, color) => {
	return !color ? chalk.cyan('[CHRIS] ') + chalk.yellow(text) : chalk.cyan('[CHRIS] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  hinataLog
}