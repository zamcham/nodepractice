const Joi = require('joi');
const logger = require('./logger');
const express = require('express');
const app = express();
const courses = require('./routes/courses');
const home = require('./routes/home');

app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/api/courses', courses);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});