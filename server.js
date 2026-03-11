const express = require("express")
const app = express()
app.use(entry)
app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const mongoose = require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/backendDB")

// .then(() => {
//     console.log("Database connected")
// })
// .catch((error) => {
//     console.log(error)
// })

const bookController = require('./controllers/BookControllers');



app.get("/", (req,res)=>{
    // res.status(404).json({Uradi:"file not found"})
    // res.download("server.js")
    res.render("index", {name:'brian karani'})
})

app.get('/sql', bookController.getAllBooks);

app.get('/my', (req, res) =>{
    res.download("./routes/masomo.js")
})

// Import the controller function
const { unda } = require('./Controllers/BookCreate');

// Define the POST route
app.post('/createBOOK', unda);

app.post('/users', (req, res) => {
    const {name} = req.body;
    res.json(`User ${name} created successfully`)
})
const {checker} = require('./Controllers/check')
app.post('/check', checker);

// const {unda} = require('./Controllers/create')
// app.post('/createBook', unda )

const userRouter = require('./routes/masomo.js')

app.use('/masomo', userRouter)

function entry(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(2000)


