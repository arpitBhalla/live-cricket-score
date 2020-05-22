var express = require('express')
var router = express.Router()

const Match=require("./../Models/Match")
router.use(function timeLog (req, res, next) {
  console.log(req.path, " at ",new Date().toLocaleString())
  next()
})

router.get('/api/v1', function (req, res) {
  Match.findById("5ec7fef3b082c82fdc262e07",(e,r)=>{
    res.send(r)
    console.log(r)
  })
})


module.exports = router