const http = require('http')
const arg = process.argv
// console.log(arg)
const port =arg[2]
http.createServer((req,res)=>{
    res.write("Testing input from cmd")
    res.end()
}).listen(port)