var express = require('express')
var router = express.Router()

router.use((req, res, next)=>next())

const response=require("./sendResponse")
const model=require("./../Models/Match")

router
.get("/:id",(req,res)=>{
  model.findById(req.params.id,(err,data)=>response(res,err,data))
})
.post("/:id",(req,res)=>{
  model.create(
    {...req.body},
    (err,data)=>{sendResponse(res,err,data)}
    )
})

module.exports = router