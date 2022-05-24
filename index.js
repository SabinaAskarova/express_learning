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

// app.get("/",(req,res)=>{
//    res.status(200).send(emp);
// })

// Modul 5.  Dərs 3. request and response task

const product=[
    {"id":1,"name":"sugar","weight":10},
    {"id":2,"name":"bread","weight":5},
    {"id":3,"name":"oil","weight":20},
    {"id":4,"name":"cheese","weight":20},
    {"id":5,"name":"tea","weight":20}
]

app.get("/",(req,res)=>{
   res.status(200).send(product);
})

app.get("/find/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const myproduct=product.find(el=>el.id==id);

    if(myproduct){
        res.status(202).send(myproduct)
    }
    res.status(400).send('No product');
})