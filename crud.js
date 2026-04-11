const fs = require('fs')

// fs.writeFileSync('files/.crud.txt','create,read,update and delete functions')
// fs.unlinkSync('files/.crud.txt')

const data = fs.readFileSync('files/.crud.txt','utf-8')
// console.log(data)

fs.appendFileSync('files/.crud.txt','CRUD Operations')

