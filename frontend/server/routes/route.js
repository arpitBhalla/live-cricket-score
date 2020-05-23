var express = require('express')
var router = express.Router()

router.use((req, res, next)=>next())

router.use("/m",require("./match"))
// router.use("/p",require("./match"))
// router.use("/t",require("./match"))

module.exports = router