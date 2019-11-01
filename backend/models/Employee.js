const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   username: {
      type: String
   },
   password: {
      type: Number
   }
}, {
   collection: 'userlist'
})

module.exports = mongoose.model('Employee', User)
