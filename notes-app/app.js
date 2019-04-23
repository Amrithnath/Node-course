var validator=require('validator')

const add=require("./utils")
const notes=require("./notes")
const chalk=require('chalk')
const yargs=require('yargs')

// console.log(add(1,3))
// const msg=getNotes()
// console.log(msg)

// console.log(validator.isURL('https://www.google.com'))
// console.log(validator.isEmail('example@gmail.com'))
// console.log(chalk.dim.inverse.blue.bgWhiteBright('Error'))

//customize yargs version
yargs.version('1.1.0')
// const commands = JSON.stringify(yargs.argv)
//Create add command
yargs.command({
    command:"add",
    describe:"Add new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)    
    }
})
// create remove command
yargs.command({
    command:'remove',
    describe:"Removes note",
    builder:{
        title:{
            describe:"Note title to be removed",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//create read command
yargs.command({
    command:'read',
    describe:'Reads a note',
    handler() {
        console.log(chalk.green("reading the note"))
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'lists all notes',
    handler(){
        notes.listNotes()
    }
})

//add, remove,read, list
yargs.parse()
// console.log(chalk.green(JSON.stringify(yargs.argv)))


/*
Goal : Wire up the list command
1 create and export listNOtes form notes.js
    -Your notes using chalk
    -print title for each note
2 call listNotes from yargs
*/