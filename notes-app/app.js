const fs=require('fs')
// fs.writeFileSync("notes.txt","My name is Amrithnath")
fs.appendFileSync("notes.txt"," I live in Bangalore")
fs.appendFileSync("notes.txt","\n I was born on a Monday")
