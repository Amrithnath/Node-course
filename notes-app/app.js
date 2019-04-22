var validator=require('validator')

const add=require("./utils")
const getNotes=require("./notes")
const chalk=require('chalk')

console.log(add(1,3))
const msg=getNotes()
console.log(msg)

console.log(validator.isURL('https://www.google.com'))
console.log(validator.isEmail('example@gmail.com'))
console.log(chalk.dim.inverse.green.bgWhiteBright('Success'))