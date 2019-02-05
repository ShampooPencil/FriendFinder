// Your apiRoutes.js file should contain two routes:
    // A GET route with the url /api/friends. 
    // This will be used to display a JSON of all possible friends. 
    
    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.

const friends = express(); 

var PORT = 3000;

friends.GET('/api/friends', (req, res, next) => { //GET means this will display all POSSIBLE FRIENDS on a this page
        
});
friends.POST('/api/friends', (req, res, next) => { //POST IS FOR HANDLING INCOMING SURVEY RESULTS


} ) 

// Listener
// ===========================================================
friends.listen(PORT, function() {
    console.log("friends listening on PORT " + PORT);
});
  
