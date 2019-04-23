const fs=require('fs')
const getNotes=function(){
    return "Your notes..."
}
const addNote=function(title,body){
    const notes = loadNotes();
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)

    console.log(notes)

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
module.exports = {
    getNotes:getNotes,
    addNote:addNote
}