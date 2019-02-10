// Your apiRoutes.js file should contain two routes:
    // A GET route with the url /api/friends. 
    // This will be used to display a JSON of all possible friends. 
    
    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.

var dataFF = require("../data/friends"); //dataFF will be used to display a JSON of all possible friends.  
//const express = require('express');
// const express = require('express');
//const friends = express(); 

//var PORT = 3000;

// friends.get('/api/friends', (req, res) => { //GET means this will display all POSSIBLE FRIENDS on a this page
//         console.log('TESTING');
//         return res.json(dataFF);
//     });
module.exports = function(app) {
        // API GET Requests
        // Below code handles when users "visit" a page.
        // In each of the below cases when a user visits a link
        // ---------------------------------------------------------------------------
      
        app.get("/api/friend", function(req, res) {
          console.log("TESTING");
          res.json(dataFF);
        });

        app.post("/api/tables", function(req, res) {
            // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
            // It will do this by sending out the value "true" have a table
            // req.body is available since we're using the body parsing middleware
            if (tableData.length < 5) {
              tableData.push(req.body);
              res.json(true);
            }
            else {
              waitListData.push(req.body);
              res.json(false);
            }
          });
    };

// friends.POST('/api/friends', (req, res) => { //POST IS FOR HANDLING INCOMING SURVEY RESULTS
//     // Create New Characters - takes in JSON input
    
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newcharacter = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newcharacter);
  
//     characters.push(newcharacter);
  
//     res.json(newcharacter);
  

// } ) 

// Listener
// ===========================================================
// friends.listen(PORT, function() {
//     console.log("friends listening on PORT " + PORT);
// });
  
