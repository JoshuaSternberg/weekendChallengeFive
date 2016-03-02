var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var dataRoute = require('./routes/data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/data', dataRoute);

//app.get("/*", function(req,res,next){
//    var file = req.params[0] || "views/index.html";
//    res.sendFile(path.join(__dirname, "./public/", file))
//});

//app.post('/data/:number', function(req, res) {
//    res.send(req.params.number);
//});

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

//module.exports = app;