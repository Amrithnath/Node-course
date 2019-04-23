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
    newNote=[]
    const newNotes=notes.filter(function(Note){
        if (Note.title===title){
           x=5
        }
        else{
            newNote.push(Note)
        }
    })
    saveNotes(newNote)
    console.log("Removed"+title)
    console.log(newNote)

}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}
/*
Challenge:wire up remove notes
-Load existing notes
-use array filter to filter out note with your title
-save the newly created array
*/