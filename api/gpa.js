var mongoose = require('mongoose')
var Gpa = mongoose.model('Gpa')
var util = require('util');
module.exports.getGPA = function (req, res, id) {
  Gpa.findOne({ _id: id })
    .exec()
    .then(function (gpa) {
      console.log("GET /gpa/"+id)
      res.json({data: gpa})
    })
    .catch(function (err) {
      res.send(err)
    })
}

module.exports.getAllGpas = function (req, res) {
  Gpa.find({}, 'attributes type')
    .exec()
    .then(function (gpas) {
      console.log("GET /gpas/")
      res.json({data: gpas})
    })
    .catch(function (err) {
      res.send(err)
    })
}

module.exports.addGpa = function (req, res) {
  new Gpa(req.body.data)
    .save()
    .then(function (gpa) {
      console.log("POST /gpa/")
      res.status(201).json({ data: gpa });
    })
    .catch(function (err) {
      res.send(err)
    })
}

module.exports.updateGpa = function (req, res, id) {
  Gpa.findByIdAndUpdate(id, {$set: req.body.data})
    .exec()
    .then(function (gpa) {
      res.json({data: gpa})
    })
    .catch(function (err) {
      res.send(err)
    })
}

module.exports.deleteGpa = function (req, res, id) {
  Gpa.findByIdAndRemove(id)
    .exec()
    .then(function (gpa) {
      res.json({data: gpa})
    })
    .catch(function (err) {
      res.send(err)
    })
}
