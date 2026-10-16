import http from "http"

const port=8000
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Welcome to home route")
    }
    else if(req.url=="/about"){
        res.end("Welcome to about route")
    }
    else if(req.url=="/contact"){
        res.end("Welcome to contact route")
    }
    else {
        res.end("404 not found")
    }
})

server.listen(port,()=>{
    console.log("server is started");
    
})