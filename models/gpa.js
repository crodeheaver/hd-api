var mongoose = require('mongoose')
var Schema = mongoose.Schema

var gpaSchema = new Schema({
  "type": { type: String, default: 'gpa'},
  attributes: {
    'student-id' : { type: Schema.Types.ObjectId, ref: 'Student' },
    'semester': String,
    'gpa'     : Number
  }
})
mongoose.model('Gpa', gpaSchema)
