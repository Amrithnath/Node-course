const fs=require('fs')
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
        console.log("new note added")
        console.log(notes)
    
    }
    else{
        console.log("Note title taken")
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
    console.log(title+" will be removed")
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}

/*
Challenge

-Set remove command to take a title as an argument
-create and export remove note function in notes.js
-call remove note in remove command handler
-log to console the name of the note to be removed
*/