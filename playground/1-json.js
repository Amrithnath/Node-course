const fs = require('fs')

const databuffer = fs.readFileSync('1-json.json');
const Jfile = JSON.parse(databuffer.toString())
Jfile.age="24"
Jfile.name="Amrithnath"

const wrJson = JSON.stringify(Jfile);

fs.writeFileSync('1-json.json',wrJson)

// const book = {
//     title:"Don't talk to strangers",
//     author:"Seth Lawrence Ginsberg"
// }

// const bookjson=JSON.stringify(book)//converts objects to string json
// console.log(bookjson)
// const bookdec=JSON.parse(bookjson)//converts string json data to object
// console.log(bookdec.author)
// fs.writeFileSync('1-json.json',bookjson)

// const databuffer=fs.readFileSync('1-json.json')
// const datajson=databuffer.toString()
// const dataparse=JSON.parse(datajson)
// console.log(dataparse.author)





//  challenge:work with json
//1 Load and parse json
//2 change age and name property
//3 stringify the changed object and overwrite the original data
//4 test by viewing json