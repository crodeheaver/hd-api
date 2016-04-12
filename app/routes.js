var students = require('../api/student');

module.exports = function(router) {
    router.route('/students')
        .get(function(req, res) {
            if(req.query.report === undefined)
                students.getAllStudents(req, res);
            else if (req.query.report === 'provisional')
                students.getProvisionalStudents(req, res);
        })
        .post(function(req, res) {
            students.addStudent(req, res);
        });

    router.route('/students/:_id')
        .get(function(req, res) {
            students.getStudent(req, res, req.params._id);
        })
        .patch(function(req, res) {
            students.updateStudent(req, res, req.params._id);
        })
        .delete(function(req, res) {
            students.deleteStudent(req, res, req.params._id);
        });

    router.route('*').get(function(req, res) {
        res.response();
    });
};
