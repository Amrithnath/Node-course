const fs=require('fs')
const chalk=require('chalk') 
const getNotes=()=>'Your notes'
function addNote(title,body){
    const notes = loadNotes();
    const duplicateNotes=notes.filter((Note)=>Note.title===title)
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("new note added"))
        console.log(notes)
    
    }
    else{
        console.log(chalk.red.inverse("Note title taken"))
    }
    
}
const loadNotes=()=>JSON.parse((fs.readFileSync('notes.json')).toString())

const saveNotes=(notes)=>fs.writeFileSync('notes.json',JSON.stringify(notes))

const removeNote=(title)=>{
    const notes=loadNotes();
    present=false
    const newNotes=notes.filter((Note)=>Note.title!==title)
    if(newNotes.length<notes.length){
        console.log(newNotes)
        saveNotes(newNotes)
        console.log(chalk.inverse.green("Note with title ")+chalk.white.inverse(" "+title+" ")+chalk.inverse.green(" was removed"))
    }
    else if(newNotes.length===notes.length){
        console.log(chalk.inverse.red("No note with title: "+title))
    }
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.blue.inverse("Your notes:\n"))
    notes.forEach(Note=>console.log("\n"+chalk.bold.yellow.inverse(Note.title)+"\n") 
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes
}
