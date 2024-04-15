const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/logdb")
.then(()=>{
    console.log("database connected")
})
.catch(()=>{
    console.log("Fail to connect")
})

const userSchema=new mongoose.Schema({
    username:String,
    password:String
   
})
const collection=mongoose.model("std_login",userSchema)
module.exports=collection