const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const session = require("express-session");
const router = require("./routes");
const db = require("./config");

const app = express();
//session
app.use(session({
    secret: 'user',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
//body parser
app.use(bodyParser.urlencoded({extended: true}));
//views
app.use(express.static(__dirname + "/views"));
//css
app.use(express.static(__dirname + "/assets"));
//ejs
app.set('view engine', 'ejs');
//routes
app.use(router);

//port
const server = app.listen(8000, function() {
	console.log("listening on port 8000");
});