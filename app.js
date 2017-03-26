var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var chalk= require('chalk');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes= require("./routes/restRoutes");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

reRoute = function(req, res) {
    res.render(path.join(__dirname, 'views/index.ejs'))
}

reRouteError=function(req,res){
    res.sendFile("views/error.html",{root:__dirname})
}

app.route("/").get(reRoute);
app.route("/getEmployee").get(routes.getEmployee);
app.route("/getEmployee").post(routes.saveEmployee,routes.getEmployee);
app.route("/getEmployee").put(routes.updateEmployee,routes.getEmployee);
app.route("/getEmployee").delete(routes.deleteEmployee,routes.getEmployee);


app.route("*").get(reRouteError);


module.exports = app;
