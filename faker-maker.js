var faker = require('faker')
var mongoose = require('mongoose')
var Student = require('./models/student')

var grade = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']

// first year
for (var i = 0; i < 10; i++) {
  var newStudent = new Student({
    type:'student',
    attributes : {
      "first-name": faker.name.firstName(),
      "last-name": faker.name.lastName(),
      "ucid": faker.random.number(),
      "major": 'Elementary',
      "start-date": faker.date.recent(),
      "ethnicity": faker.name.firstName(),
      "highshool-name": faker.name.firstName(),
      "is-sda": faker.random.boolean(),
      "bgcheck-date": faker.date.recent(),
      "gpa": [],
      "prov-autobiography": faker.random.boolean(),
      "prov-educ125": faker.name.firstName(),
      "prov-application": faker.random.boolean(),
      "prov-observation-hours": faker.random.number(),
      "prov-speech-hearing": faker.random.boolean(),
      "prov-myersbriggs": faker.random.boolean(),
      "prov-ref-1": faker.random.boolean(),
      "prov-ref-2": faker.random.boolean(),
      "prov-ref-3": faker.random.boolean(),
      "prov-felonstatement": faker.date.recent(),
      "prov-tpcapproval": faker.date.recent(),
      "prov-comments": faker.name.firstName(),
      "DiversityOBHRS": faker.random.boolean(),
      "cand-application": faker.random.boolean(),
      "cand-interview": faker.random.boolean(),
      "cand-portfolio": faker.random.boolean(),
      "cand-recommendation": faker.date.recent(),
      "cand-felonystatement": faker.date.recent(),
      "cand-tpcapproval": faker.date.recent(),
      "cand-philosophyhrs": faker.random.number(),
      "cand-educ218": faker.name.firstName(),
      "cand-educ225": faker.name.firstName(),
      "cand-comments": faker.name.firstName(),
      "pre-studteachap": faker.random.boolean(),
      "pre-recommendation": faker.random.boolean(),
      "pre-bgcheck": faker.random.boolean(),
      "pre-one-source-sub": faker.random.boolean(),
      "pre-workrequest": faker.random.boolean(),
      "pre-physical-tb-test": faker.random.boolean(),
      "pre-portfolio": faker.random.boolean(),
      "pre-presession-st": faker.random.boolean(),
      "pre-learingtheory": faker.random.boolean(),
      "pre-gensec": faker.random.boolean(),
      "pre-felonystatement": faker.date.recent(),
      "pre-studentteaching-date": faker.date.recent(),
      "pre-tcp-approval": faker.date.recent(),
      "pre-spedhrs": faker.random.number(),
      "pre-educ345": faker.name.firstName(),
      "pre-educ346": faker.name.firstName(),
      "pre-educ356": faker.name.firstName(),
      "pre-comments": faker.name.firstName(),
      "st-portfolio": faker.random.boolean(),
      "st-resume": faker.random.boolean(),
      "st-felonystatement": faker.date.recent(),
      "st-startdate": faker.date.recent(),
      "st-graddate": faker.date.recent(),
      "st-init-cert-date": faker.date.recent(),
      "st-cert-app": faker.random.boolean(),
      "stu-praxII-name": faker.name.firstName(),
      "stu-praxII-datetaken": faker.date.recent(),
      "stu-praxII-score": faker.random.number(),
      }
  })
  newStudent.save()
    .then(function (v) {
      return
    })
    .catch(function (err) {
      console.log(err)
    })
}
