const express = require('express');
const pasth = require("path");
const bcrypt =require("bcrypt");
const collection = require("./config")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// use EJS as view engine
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
});


app.post("/signup",async(req,res)=>{
    const data ={
      name: req.body.username,
      email: req.body.email,
      password: req.body.password}
      const userdata = await collection.create(data);
      console.log(userdata);
});

app.use(express.static("public"));
const port =5000;
app.listen(port,() =>{
    console.log(`Server running on Port: ${port}`);
})
