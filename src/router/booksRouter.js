'use strict';
const router = require('express').Router();
const {getAllBooks, addBook, updateBook, deleteBook} = require("../controller/booksController");

router.route('/')
    .get(getAllBooks)
    .post(addBook);

router.route('/:id')
    .patch(updateBook)
    .delete(deleteBook);

module.exports = router;