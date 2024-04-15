const express=require("express")
const app=express()
const path=require("path")
const ejs=require("ejs")
const collection=require("./mongodb")

app.set("view engine","ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({extended:false}))

app.get('/', function (req, res) {
    res.render("home")
  })
app.get('/login', function (req, res) {
    res.render("login")
  })
  app.get('/signup', function (req, res) {
    res.render("signup")
  })

app.post("/login",async (req,res)=>{
         console.log(req.body)
    const data={
        username:req.body.name,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.render("home")
})

app.listen(3000,()=>{
    console.log("Port connected")
})