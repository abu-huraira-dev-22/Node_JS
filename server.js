const http = require('http')
http.createServer((req,res)=>{
    res.write("<h1>Hello World</h1>")
    res.end('Hello')
}).listen(4800)

// Create two sever on same file

const https = require('http')
https.createServer((req,res)=>{
    res.write("<h1>Learning Node JS </h1>")
    res.end("End Now")
}).listen(5000)