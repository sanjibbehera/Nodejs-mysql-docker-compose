const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

var getHomePage = require('./routes/index');

var app = express();
const { pool } = require('./config/dbConfig');
const port = 5000;

app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', getHomePage);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});