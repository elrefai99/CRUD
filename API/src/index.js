require('dotenv').config();
const express = require('express')
const mongodb = require('mongoose');
const app = express();

mongodb.connect(process.env.Database_Link)
    .then(()=> {
        console.log('Mongoose Connect')
    }).catch(err => console.log(err))

module.exports = app;