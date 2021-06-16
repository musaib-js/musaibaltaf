const express = require('express')
const app = express();
const port = 80;
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const bodyparser = require("body-parser");

// Initialising the database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/musaibaltaf', { useNewUrlParser: true, useUnifiedTopology: true });

// Static Stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.set('views', path.join(__dirname, 'views'));

// Setting View Engine to html
app.engine('html', require('ejs').renderFile);

// Endpoints
app.get("/", (req, res) => {
    res.status(200).render('index.html')
});
app.get("/index.html", (req, res) => {
    res.status(200).render('index.html')
});
app.get("/articles.html", (req, res) => {
    res.status(200).render('articles.html')
});
app.get("/books.html", (req, res) => {
    res.status(200).render('books.html')
});
app.get("/about.html", (req, res) => {
    res.status(200).render('about.html')
});
app.get("/contact.html", (req, res) => {
    res.status(200).render('contact.html')
});


// Post Request
app.post("/", (req, res) => {
    console.log(req.body)
});
app.post("/index.html", (req, res) => {
    console.log(req.body)
});


//Starting the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});