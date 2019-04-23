const fs=require('fs')
const chalk=require('chalk')
const getNotes=function(){
    return "Your notes..."
}
const addNote=function(title,body){
    const notes = loadNotes();
    const duplicateNotes=notes.filter(function(Note){
        return Note.title===title
    })
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
const loadNotes=function(){
    try{    
        const databuffer = fs.readFileSync('notes.json')
        const dataJson = JSON.parse(databuffer.toString())
        return dataJson
    }
    catch(e){
        return []
    }
}
const saveNotes=function(notes){
    dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNote=function(title){
    const notes=loadNotes();
    present=false
    const newNotes=notes.filter(function(Note){
        return Note.title!==title
    })
    if(newNotes.length<notes.length){
        console.log(newNotes)
        saveNotes(newNotes)
        console.log(chalk.inverse.green("Note with title ")+chalk.white.inverse(" "+title+" ")+chalk.inverse.green(" was removed"))
    }
    else if(newNotes.length===notes.length){
        console.log(chalk.inverse.red("No note with title: "+title))
    }
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}
