const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ensure this matches the MySQL user
  password: 'Shreyasu@123', // Replace with the correct password
  database: 'lifevault'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
