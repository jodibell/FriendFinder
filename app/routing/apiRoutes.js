// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// This data source holds arrays of information on friends' data.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    var newFriend = req.body;
    var bestScore = 1000;
    var friendMatch;
    for (var i = 0; i<friendsData.length; i++) {
        var absoluteScore = 0;
        var indexScore = 0;
        var thisFriend = friendsData[i];
            for (var j = 0; j<thisFriend.userAnswers.length; j++) {
                indexScore = Math.abs(thisFriend.userAnswers[j] - newFriend.userAnswers[j])
                //We need to add indexScores at each index to make absoluteScore
                absoluteScore=absoluteScore + indexScore;
                console.log("absoluteScore" + [j] + absoluteScore);
            }
            if (absoluteScore<bestScore) {
                bestScore=absoluteScore;
                friendMatch = thisFriend;
            }
    }
    friendsData.push(req.body);

    res.json(friendMatch);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  /*app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];

    res.json({ ok: true });
  });*/
};