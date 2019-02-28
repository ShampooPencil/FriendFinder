// Dependencies]
// =============================================================
const express = require('express');
const path = require('path');
const fs = require('fs');
var bodyParser = require("body-parser");
//express , path , and init -y are installed(checked off****)

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// To use multiple static assets directories, call the express.static middleware function multiple times:
//app.use(express.static(__dirname + '/public'));
app.use(express.static('/public'));
app.use(express.static('files'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));//so i only put home.html only and it-- 
                                                    //--had errors. But i app the roots dirs and it worked
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});








