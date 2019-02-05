// Your htmlRoutes.js file should include two routes:
    // A GET Route to /survey which should display the survey page. 
    
    // A default, catch-all route 
    // that leads to home.html which displays the home page

const PORT = 3000;

const homeFF = express(); //homeFF means FriendFinder home page on the page
homeFF.get('/survey', (req, res, next) => {
    
});

// Listener
// ===========================================================
homeFF.listen(PORT, function() {
    console.log("homeFF listening on PORT " + PORT);
});