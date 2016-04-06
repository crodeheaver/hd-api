var students = require('../api/student')
var gpa = require ('../api/gpa')
module.exports = function (router) {
  router.route('/students')
    .get(function (req, res) {
      students.getAllStudents(req, res)
    })
    .post(function (req, res) {
      students.addStudent(req, res)
    })

  router.route('/students/:_id')
    .get(function (req, res) {
      students.getStudent(req, res, req.params._id)
    })
    .patch(function (req, res) {
      students.updateStudent(req, res, req.params._id)
    })
    .delete(function (req, res) {
      students.deleteStudent(req, res, req.params._id)
    })

    router.route('/gpas')
      .get(function (req, res) {
        gpa.getAllGpas(req, res)
      })
      .post(function (req, res) {
        gpa.addGpa(req, res)
      })

    router.route('/gpas/:_id')
      .get(function (req, res) {
        gpa.getGpa(req, res, req.params._id)
      })
      .patch(function (req, res) {
        gpa.updateGpa(req, res, req.params._id)
      })
      .delete(function (req, res) {
        gpa.deleteGpa(req, res, req.params._id)
      })

  router.route('*').get(function (req, res) {
    res.sendFile('./public/index.html')
  })
}
