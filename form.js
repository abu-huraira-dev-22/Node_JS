const http = require('http')
const fs = require('fs')
const { error } = require('console')

http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8',(error,data)=>{
        if(error){
            res.writeHead(500,{'content-type':'text/plain'})
            res.end('Internal Server Error')
        }
        res.writeHead(200,{'content-type':'text/html'})
        if(req.url == '/'){
            res.write(data)
        }
        else if(req.url == '/submit'){
            res.write('<h1>Data Submitted</h1>')
        }
        res.end()
    })
}).listen(3200)