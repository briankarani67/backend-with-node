const express = require("express")

const router = express.Router()

router.use(enter)

router.get("/", (req,res) => {
    res.send("Masomo ni tamu")
})

router.get("/units", (req,res) => {
    res.render("units")
})

router.post('/',(req,res) =>{
    res.send("Am proud in post")
})

router
  .route("/:id")
  .get((req, res) =>{
    console.log(req.unit)
    res.send(`Get unit with id ${req.params.id}`)
})
  .put((req, res) =>{
    res.send(`Update unit with id ${req.params.id} `)
})
.delete((req, res) =>{
    res.send(`Deleted unit with id ${req.params.id} `)
})

const units = [{unit:"Web design"}, {unit:"Before you"}]

router.param("id", (req, res, next, id) =>{
    req.unit = units[id]
    next();
})

function enter(req,res,next){
    console.log(req.originalUrl)
    next()
}
module.exports = router