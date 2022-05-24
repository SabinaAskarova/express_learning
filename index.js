const express = require("express");

console.log("hello node tasks");

const app=express();
app.listen(3000,function(req,res){
console.log("server is running on localhost:3000")
})

// Modul 5.  Dərs 2. Express kitabxanasi task

const emp=[
    {"id":1,"name":"employee 1","age":20},
    {"id":2,"name":"employee 2","age":21},
    {"id":3,"name":"employee 3","age":22}
]

app.get("/",(req,res)=>{
   res.status(200).send(emp);
})

