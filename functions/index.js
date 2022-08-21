const functions = require('firebase-functions');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
let cors = require('cors');


// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
// middleware for cookies
app.use(cookieParser());

require('./routes')(app);

exports.user_service = functions.region('asia-southeast1').https.onRequest(app);

