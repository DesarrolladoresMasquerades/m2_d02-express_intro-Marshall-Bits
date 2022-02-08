const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.static("public"));

app.all("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
app.all("/hobbies", (req, res)=>{
    res.sendFile(__dirname + "/views/hobbies.html")
})
app.all("/hobbies/music", (req, res)=>{
    res.sendFile(__dirname + "/views/hobbies/music.html")
})

app.listen(3000, ()=>{
    console.log("App listening on port 3000");
})