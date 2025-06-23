const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());



const users = [{userName: "Hemanth", age:19, email:"hemanth@gmail.com"},
    {userName: "Sai Kumar", age:20, email:"saikumar@gmail.com"},
    {userName:"Mahesh", age:21, email:"mahesh@gmail.com"}
];

app.get('/users', async(req,res)=>{
    try{
        const {userName,age, email} = req.body;
        if(!userName || !age || !email){
            return res.status(400).send({message:"Please provide all the required fields: userName, age, email"});  
        }
        const user = users.find(user => user.userName === userName && user.age === age && user.email === email);
        if(!user){
            return res.status(404).send({message:"User not found"});    
        }
        res.status(200).send({message:"User found", user});

    }catch(err){
        res.status(500).send({message:"Internal server error"})
    }
})
app.listen(8080, ()=>{
    console.log("server is  running on the port 80080");
})