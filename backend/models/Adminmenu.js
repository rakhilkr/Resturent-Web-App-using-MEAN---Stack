const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Adminmenu = new Schema({
   typeoffood: {
      type: String
   },
   foodname: {
      type: String
   },
   image: {
      type: String
   },
quantity: {
      type: Number
   },
   price: {
      type: Number
   }
}, {
   collection: 'adminmenu'
})

module.exports = mongoose.model('Adminmenu',Adminmenu)

