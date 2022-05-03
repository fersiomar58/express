const express=require("express");
const { Server } = require("http");
const app=express();
const path=require("path")


const time = new Date();
const hour = time.getHours();
const day = time.getDay();

console.log('hour',hour)
console.log('day',day)

const PORT = process.env.PORT || 4000

app.use(function(req,res,next){
    (hour>9 && hour<=17 && day>0 && day<6 ) ? next(): res.sendFile(path.join(__dirname,"public","homePage.html"))
})

app.use(express.static(path.join(__dirname,"public")))



app.listen
(PORT,err=>err?console.log(err):console.log(  '  server is successfully runnig ' ) );

