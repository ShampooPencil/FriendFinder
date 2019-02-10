// Your htmlRoutes.js file should include two routes:
    // A GET Route to /survey which should display the survey page. 
    
    // A default, catch-all route 
    // that leads to home.html which displays the home page
const express = require('express');
const path = require('path');
const PORT = 3000;

const homeFF = express(); //homeFF means FriendFinder home page on the page

homeFF.use(express.static('/public'));
homeFF.use(express.static('files'));

homeFF.use(express.urlencoded({ extended: true }));
homeFF.use(express.json());

homeFF.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// If no matching route is found DEFAULT to home
homeFF.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});



// Listener
// ===========================================================
homeFF.listen(PORT, function() {
    console.log("homeFF listening on PORT " + PORT);
});