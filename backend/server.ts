let dbConfig = require('./database/db');

import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import createError from 'http-errors'
const path = require('path');
import cors from 'cors'

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected')
  },
  error => {
    console.log('Database could not connected: ' + error)
  }
)

// Setting up port with express js
const noteRoute = require('../backend/routes/note.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'../src/dist/index.html'));
});


app.use('/api', noteRoute)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

