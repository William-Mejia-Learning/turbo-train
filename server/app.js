const mysql = require('mysql2');
const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");

// app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.set('view engine', 'html');

// create the connection to database

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DATABASE_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect((err)=> {
	if(err) throw err;
	console.log("connected " + process.env.PORT);

});

app.post("/signup" ,async (req,res) => {
  console.log(req.body, 'req.body');
  const { email, name, username, password } = req.body;

  let hashedPassword = await bcrypt.hash(password, 8);

  connection.query('INSERT INTO users SET ?', { email: email, name: name, username:username, password: hashedPassword }, (err, results) => {
      if (err) {
          console.log(err);
      }
  })
})


// app.use('/', require('./routes/pages'));
// app.use('/profile', require('./routes/pages'));
// app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT);