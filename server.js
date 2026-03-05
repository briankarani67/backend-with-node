const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    // res.status(404).json({Uradi:"file not found"})
    // res.download("server.js")
    res.render("index", {name:'brian karani'})
})

const userRouter = require('./routes/masomo')

app.use('/masomo', userRouter)


app.listen("2000", ()=>{
    console.log("The begining of the journey backend>>.")

})

