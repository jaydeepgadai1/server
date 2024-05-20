
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");




const app = express();
const port = 3001;
app.use(cors());
const db = mysql.createConnection({
  host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());


app.post('/feedback', (req, res) => {
  const { teacher_name, student_name, subject_name, explanation } = req.body;
  const sql = 'INSERT INTO feedback (teacher_name, student_name, subject_name, explanation) VALUES (?, ?, ?, ?)';
  db.query(sql, [teacher_name, student_name, subject_name, explanation], (err, result) => {
    if (err) throw err;
    res.status(201).send('Feedback submitted successfully');
  });
});


app.get('/feedback', (req, res) => {
  const sql = 'SELECT * FROM feedback';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
