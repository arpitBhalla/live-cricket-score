var express = require('express')
var router = express.Router()

let model = require("./../Models/Match")
// let model
const response = require('./sendResponse')

// router.use((req, res, next) => next())

router.param("mode", (req, res, next, mode) => {
  switch (mode) {
    case 'm':
      model = require("./../Models/Match")
      break;
    case 't':
      model = require("./../Models/Match")
      break;
    case 'p':
      model = require("./../Models/Player")
      break;
    default:
      return response(res, "SomeThing Went Wrong", "")
      break;
  }
  next()
})

router
  .post("/:mode(m|t|p)", (req, res) => {
    model.create(req.body, (err, data) => response(res, err, data))
  })

router.route("/:mode(m|t|p)/:id")
  .get((req, res) => {
    model.findById(req.params.id, (err, data) => response(res, err, data))
  })
  .put((req, res) => {
    model.findByIdAndUpdate(req.param.id, req.body, (err, data) => response(res, err, data))
  })
  .delete((req, res) => {
    model.findByIdAndDelete(req.params.id, (err, data) => response(res, err, data))
  })

module.exports = router