'use strict';
const User = require('../model/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const result = await User.find({});
        res.status(200).json(result);
    } catch (e) {
        console.log(e.toString());
    }
}

const addBook = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(200).send(result);
    } catch (e) {
        console.log(e.toString());
    }
}

const updateBook = async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (result) {
            res.json(result);
        } else {
            res.status(400).json({"message": "id not found"});
        }
    } catch (e) {
        console.log(e.toString());
    }
}

const deleteBook = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        if (result) {
            res.json(result);
        } else {
            res.status(400).json({"message": "id not found"});
        }
    } catch (e) {
        console.log(e.toString());
    }
}

module.exports = {getAllBooks, addBook, updateBook, deleteBook}