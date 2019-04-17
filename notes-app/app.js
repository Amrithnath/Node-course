var validator=require('validator')

const add=require("./utils")
const getNotes=require("./notes")

console.log(add(1,3))
const msg=getNotes()
console.log(msg)

console.log(validator.isEmail('example.com'))