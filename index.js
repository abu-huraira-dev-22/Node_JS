// const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log(req,'==>req')
//     res.end('Server is open')
// })
// server.listen(5000,'127.0.0.1',()=>{
//     console.log('==>Server is running')
// })

// Core Modules
const fs = require('fs')
fs.writeFileSync('dummy.txt','trying with modules')
const os = require('os')
console.log(os.platform())
console.log(os.hostname())
console.log(os.cpus())
console.log("hello world")

// Global Objects