const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSessionSchema = new Schema({
  userId : { type: String, default: '' }, 
  priviledge : {type : Number, default: '0'},
  timestamp : { type: Date, default: Date.now() },
  isValid : { type: Boolean, default: true}
});

const UserSession = mongoose.model('UserSession', userSessionSchema);
module.exports = UserSession;