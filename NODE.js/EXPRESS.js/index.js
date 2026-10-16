import express from "express"

const app= express()
const port=8000

let users=[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "age": 25,
    "department": "Engineering",
    "salary": 60000
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "age": 28,
    "department": "Human Resources",
    "salary": 55000
  },
  {
    "id": 3,
    "name": "Rahul Singh",
    "age": 30,
    "department": "Finance",
    "salary": 65000
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "age": 26,
    "department": "Marketing",
    "salary": 50000
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "age": 32,
    "department": "Sales",
    "salary": 58000
  }
]

app.get("/user",(req,res)=>{
    res.json(users)
})
app.get("/user/:id",(req,res)=>{
    let id=req.params.id

    let existingUser=users.find(user=>user.id==id)
    if(!existingUser){
        return res.send("404 not found")
    }
    console.log(id);
    res.json(existingUser)
})


app.get("/search",(req,res)=>{
    let query= req.query
    res.json(query)
})



app.listen(port,()=>{
    console.log(`Server is started at ${port}`);
    })



// app.use(express.json())

// //app.[http method]("route",callback)
// app.get("/",(req,res)=>{
//     res.send("<h1>Kanika</h1>")   
// })
// app.post("/about",(req,res)=>{
//     let body= req.body
//     console.log(body); 
//     res.send("Hello") 
// })
// app.get("/contact",(req,res)=>{
//     res.send("Contact page")   
// })

// app.listen(port,()=>{
//     console.log(`Server is started at ${port}`);
    
// })