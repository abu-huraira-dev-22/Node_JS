const http = require('http')
http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<h1> Home Page </h1>')
    }
    else if(req.url == '/login'){
        res.write('<h1> login Page </h1>')
    }
    else{
        res.write("<h1> Other </h1>")
    }
    res.end()
}).listen(3000)