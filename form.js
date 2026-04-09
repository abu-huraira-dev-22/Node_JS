const http = require('http')
const fs = require('fs')
const queryString = require('querystring')
const { buffer } = require('stream/consumers')

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
            let dataBody = []
            req.on('data',(chunk)=>{
                dataBody.push(chunk)
            })
            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString()
                let readableData= queryString.parse(rawData)
                console.log(readableData)
            })
            res.write('<h1>Data Submitted</h1>')
        }
        res.end()
    })
}).listen(3200)