var validator=require('validator')

const add=require("./utils")
const getNotes=require("./notes")
const chalk=require('chalk')
const yargs=require('yargs')

console.log(add(1,3))
const msg=getNotes()
console.log(msg)

console.log(validator.isURL('https://www.google.com'))
console.log(validator.isEmail('example@gmail.com'))
console.log(chalk.dim.inverse.blue.bgWhiteBright('Error'))


const command = process.argv

console.log(chalk.yellow(command))
console.log(chalk.green(JSON.stringify(yargs.argv)))

if(command==="add"){
    console.log(chalk.blue("adding note..."))
}
else if(command === "remove"){
    console.log(chalk.red("removing note..."))
}