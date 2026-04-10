const queryString = require('querystring')
function userDataSubmit(req,res){
    let dataBody = []
                req.on('data',(chunk)=>{
                    dataBody.push(chunk)
                })
                req.on('end',()=>{
                    let rawData = Buffer.concat(dataBody).toString()
                    let readableData= queryString.parse(rawData)
                    let dataString = "My name is " + readableData.name + " and my email is " + readableData.email
    
                    console.log(dataString)
                })
    res.write(`
         <h1> You can get your data from here </h1>
        `)
}module.exports = userDataSubmit
