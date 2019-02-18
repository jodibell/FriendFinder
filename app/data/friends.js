// ===============================================================================
// DATA
// Below data will hold all of the friends arrays.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {
      userName: "Ahmed",
      userPhoto: "ahmed@example.com",
      //need to populate question answers here!!!
      userAnswers: ["1", "2", "3", "4", "5", "5", "4", "3", "2", "1"]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsData;
  