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
    const notes=loadNotes();
    present=false
    const newNotes=notes.filter(function(Note){
        if(Note.title===title){
            present=true
        }
        return Note.title!==title
    })
    saveNotes(newNotes)
    console.log("Removed "+title)
    console.log(newNotes)
    return present
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}
/*
Challenge:Chalk to provide useful logs to user
-If removed print green background note removed
-if no note removed print red background note not removed or found
*/