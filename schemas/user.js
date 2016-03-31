var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true},
	mail: {type: String, unique: true, required: true},
  working: {type: Boolean, required:true},
  username : {type: String, unique: true, required: true},
  password : String,
  scope : [String]
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
