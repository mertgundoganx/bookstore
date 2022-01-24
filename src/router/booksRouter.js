'use strict';
const router = require('express').Router();
const {getAllBooks, addBook, updateBook, deleteBook} = require("../controller/booksController");

router.route('/').get(getAllBooks)
router.route('/').post(addBook);
router.route('/:id').patch(updateBook)
router.route('/:id').delete(deleteBook);

module.exports = router;