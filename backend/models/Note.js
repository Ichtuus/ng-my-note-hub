const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Note = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  type: {
    type: String
  }
}, {
  collection: 'notes'
})

module.exports = mongoose.model('Note', Note)
