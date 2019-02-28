
const http=require("http")
const fs = require("fs")

const url="http://www.google.com"
http.get(url,(responce)=>{
responce.on("data",(chunk)=>{

    fs.writeFile("index.txt",chunk.toString(), ()=>
{
     

})
   
    
})
responce.on("end",()=>{
    console.log("End of the response")
})
}).on("error",(err)=>{
    console.error(err.message)
})


