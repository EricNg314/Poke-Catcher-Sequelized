require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();
var db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

require("./controllers/pokemon_controller.js")(app);


db.sequelize.sync({}).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on localhost:" + PORT);
    });
});