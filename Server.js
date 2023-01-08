
const time=require("./time")
const verifTime=require("./time")
const express = require('express')
const app = express()
const port = 3000

app.use(verifTime)
app.use(express.static("profil"))









app.listen(port, ()=>{
    console.log (`Example app listening on port ${port}`)
})