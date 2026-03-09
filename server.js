const express = require("express")
const app = express()
app.use(entry)
app.set("view engine", "ejs")
app.use(express.json());

app.get("/", (req,res)=>{
    // res.status(404).json({Uradi:"file not found"})
    // res.download("server.js")
    res.render("index", {name:'brian karani'})
})

app.get('/my', (req, res) =>{
    res.download("./routes/masomo.js")
})

app.post('/users', (req, res) => {
    const {name} = req.body;
    res.json(`User ${name} created successfully`)
})
const {checker} = require('./Controllers/check')
app.post('/check', checker);

const userRouter = require('./routes/masomo.js')

app.use('/masomo', userRouter)

function entry(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(2000)

