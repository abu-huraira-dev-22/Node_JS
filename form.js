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
                let dataString = "My name is " + readableData.name + " and my email is " + readableData.email

                console.log(dataString)
                fs.writeFile('text/' + readableData.name + '.txt',dataString, 'utf-8',(err)=>{
  if(err){
                    res.end("internal server error")
                    return false;
                }
                else{
                    console.log('file created')
                }
                })
              
            })
            res.write('<h1>Data Submitted</h1>')
        }
        res.end()
    })
}).listen(3100)