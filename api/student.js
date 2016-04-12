var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var util = require('util');
module.exports.getStudent = function(req, res, id) {
    Student
        .findOne({ _id: id })
        .exec()
        .then(function(student) {
            console.log("GET /student/" + id);
            res.json({ data: student });
        })
        .catch(function(err) {
            res.send(err);
        });
};

module.exports.getAllStudents = function(req, res) {
    Student.find({}, 'attributes type')
        .sort({ 'attributes.first-name': 1 })
        .exec()
        .then(function(students) {
            console.log("GET /students/");
            res.json({ data: students });
        })
        .catch(function(err) {
            res.send(err);
        });
};
//    "prov-educ125"            : { type: String },
module.exports.getProvisionalStudents = function(req, res) {
    Student.find({ 'attributes.prov-autobiography': true,
                   'attributes.prov-application': true,
                   'attributes.prov-speech-hearing': true,
                   'attributes.prov-myers-briggs': true,
                   'attributes.prov-ref1': true,
                   'attributes.prov-ref2': true,
                   'attributes.prov-ref3': true,
                   'attributes.prov-tpc-approval': { $ne: undefined },
                   'attributes.prov-felony-statement': { $ne: undefined },
                   'attributes.prov-observation-hours': { $gte: 20 },
                   'attributes.prov-educ125': {$in: ['A','B','C','D']},
                   'attributes.gpa.gpa': { $gte: 2.75 }
                 })
        .sort({ 'attributes.first-name': 1 })
        .exec()
        .then(function(students) {
            console.log("GET /students/");
            res.json({ data: students });
        })
        .catch(function(err) {
            res.send(err);
        });
};

module.exports.addStudent = function(req, res) {
    new Student(req.body.data)
        .save()
        .then(function(student) {
            console.log("POST /student/");
            res.status(201).json({ data: student });
        })
        .catch(function(err) {
            res.send(err);
        });
};

module.exports.updateStudent = function(req, res, id) {
    Student.findByIdAndUpdate(id, req.body.data)
        .exec()
        .then(function(student) {
            console.log("PATCH /student/" + id);
            res.status(200).json({ data: student });
        })
        .catch(function(err) {
            res.send(err);
        });
};

module.exports.deleteStudent = function(req, res, id) {
    Student.findByIdAndRemove(id)
        .exec()
        .then(function(student) {
            res.json({ data: student });
        })
        .catch(function(err) {
            res.send(err);
        });
};
