'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./src/db/connection');
const middleware = require('./src/middleware/middleware');
require('dotenv/config');

const app = express();
const port = process.env.PORT;

connectDb(process.env.DB_CONNECTION);

app.use(bodyParser.json());

const booksRouter = require('./src/router/booksRouter');

app.use('/api/v1/books', booksRouter);

app.use(middleware);

app.listen(port, () => {
    console.log(`App running on port: ${port}.`);
});