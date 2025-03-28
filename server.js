require("dotenv").config();
const mysql = require("mysql2");

// Creating a MySQL connection to my local database portal
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// A function to call stored procedure to add a NEW USER
const addUser = (email, password, type, active = 1) => {
  return new Promise((resolve, reject) => {
    const query = "CALL addUser(?, ?, ?, ?)";
    pool.execute(query, [email, password, type, active], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// A Test Executaion  of the addUser function
addUser("emmanueldanielmaziku@gmail.com", "#Txeanz9yz12ania76", "Developer")
  .then((result) => {
    console.log("New user has been added successfully:", result);
  })
  .catch((error) => {
    console.error("Sorry , Error occured while adding a new user:", error);
  });
