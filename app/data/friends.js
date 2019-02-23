// ===============================================================================
// DATA
// Below data will hold all of the friends arrays.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {
      userName: "Ahmed",
      userPhoto: "https://entrepreneurhandbook.co.uk/wp-content/uploads/2017/08/Stock-Photography.jpg",
      //need to populate question answers here!!!
      userAnswers: ["1", "2", "3", "4", "5", "5", "4", "3", "2", "1"]
    },
    {
      userName: "Janis",
      userPhoto: "https://cdn.shopify.com/s/files/1/0070/7032/files/free-stock-photos.png",
      //need to populate question answers here!!!
      userAnswers: ["5", "4", "3", "2", "1", "1", "2", "3", "4", "5"]
    },
    {
      userName: "Kim",
      userPhoto: "https://despreneur.com/wp-content/uploads/2014/02/Best-Free-Stock-Photo-Websites-deatchstockphoto.jpg",
      //need to populate question answers here!!!
      userAnswers: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsData;
  