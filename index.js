const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.static("public"));
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Edcil@2949164",
  database: "student_db",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected successfully");
  }
});

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error fetching students" });
    } else {
      res.json(results);
    }
  });
});

// start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
