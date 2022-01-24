'use strict';
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "title": {
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
    "pages": {
        type: Number,
        required: true,
    },
    "year": {
        type: Number,
        required: true
    },
    "country": {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    "imageLink": {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    "language": {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    "link": {
        type: String,
        minlength: 3,
        required: true
    },
    "category": {
        type: String,
        default: "No Category"
    },
    "publisher": {
        type: String,
        minlength: 2,
        maxlength: 50,
        default: "No Publisher"
    },
    "stock": {
        type: Number,
        default: 100
    },
    "isOnSale": {
        type: Boolean,
        default: true
    }
}, {collection: 'books', timestamps: true});

const book = mongoose.model('book', bookSchema);

module.exports = book;