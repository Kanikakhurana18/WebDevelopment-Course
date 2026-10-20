import express from "express"
import cors from "cors"

let app=express()
app.use(express.json()) //express .json built in middleware
//custom middleware

// let password= "12345";//global variable

// app.use((req,res,next)=>{
//     if(req.body.pass!=password){
//         res.send("password does not match")
//     }
//     next()
// })

const port=8000
app.get("/",(req,res)=>{
    // console.log(req.headers); //to get all headers
    // console.log(req.get("user-agent"));

    res.header("x-username","kanika")
    res.removeHeader("x-powered-by")
    res.json({name:"Kanika",age:21})
})

app.listen(port,()=>{
    console.log(("server is started"));    
})