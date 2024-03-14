const config = require('config');
const winston = require('winston');
require('winston-mongodb');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
require('express-async-errors');
const express = require('express');
const app = express();
require('./startup/routes')(app);


const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logfile.log' }),
    new winston.transports.Console({ colorize: true, prettyPrint: true })
  ]
});

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));