
var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'reviews'
});

connection.connect();

// TODO: Do not allow user to update their review if
//       they already left a review
const addNewUser = function(userId, name, review, rating) {
  var query = `insert ignore into reviews(userId, name, review, rating) values ("${userId}", "${name}", "${review}","${rating}")`;
  connection.query(query, (err) => {
    connection.end();
    if (err) { throw err; }
    // console.log("Added To DB");
  });
}

// TODO: Function to fetch for a single specific review

const getAllUsers = function(callback) {
  var query = `select * from reviews`;
  connection.query(query, (err, result) => {
    if (err) { throw err; }
    callback(err, result);
  });
}


module.exports = {
  addNewUser, getAllUsers, connection
};