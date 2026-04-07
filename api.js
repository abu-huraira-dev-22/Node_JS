const http = require('http')
const userData = [
    {
        name:'Huraira',
        email:'huraira@gmail.com',
        age:21
    },
    {
        name:'Abdul',
        email:'abdul@mail.com',
        age:18
    },
    {
        name:'Faraz',
        email:'faraz@outlook.com',
        age:24
    }
]
http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(userData))
    res.end()
}).listen(6100)