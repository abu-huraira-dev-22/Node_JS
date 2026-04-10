const http = require('http')
const userForm = require('./userForm')
http.createServer((req,res)=>{
    userForm(req,res)
    res.end()
}).listen(3200)