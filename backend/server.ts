let dbConfig = require('./database/db');

import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import createError from 'http-errors'
import cors from 'cors'

const corsOptions = {
  origin: 'http://localhost:4200'
}

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
app.use(cors(corsOptions));
app.use('/api', noteRoute)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

