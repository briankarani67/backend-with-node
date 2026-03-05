const express = require("express")

const router = express.Router()

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
  .route(":id")
  .get((req, res) =>{
    res.send(`Get unit with id ${req.params.id}`)
})
  .put((req, res) =>{
    res.send(`Update unit with id ${req.params.id} `)
})
.delete((req, res) =>{
    res.send(`Delete unit with id ${req.params.id} `)
})

// router.get('/:id', (req, res) =>{
//     res.send(`Get unit with id ${req.params.id}`)
// })

// router.put('/:id', (req, res) =>{
//     res.send(`Updatei unit with id ${req.params.id} `)
// })

// router.delete('/:id', (req, res) =>{
//     res.send(`Delete unit with id ${req.params.id} `)
// })

module.exports = router