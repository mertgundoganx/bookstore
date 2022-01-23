'use strict';
const mongoose = require('mongoose');

const connectDb = (connectionUrl) => {
    mongoose.connect(connectionUrl)
        .then(() => {
            console.log('Connected to MongoDB.');
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = connectDb;