'use strict';
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "name": {
        type: String,
        unique: true,
        minlength: 2,
        maxlength: 50,
        required: true
    },
    "author": {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    "year": {
        type: Number,
        required: true
    }
}, {collection: 'books', timestamps: true});

const book = mongoose.model('book', bookSchema);

module.exports = book;