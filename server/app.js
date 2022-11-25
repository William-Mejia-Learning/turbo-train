const mysql = require("mysql2");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");

// app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.set("view engine", "html");

// create the connection to database

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DATABASE_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected " + process.env.PORT);
});

app.post("/signup", async (req, res) => {
  console.log(req.body, "req.body");
  const { email, name, username, password } = req.body;

  let hashedPassword = await bcrypt.hash(password, 8);

  connection.query(
    "INSERT INTO users SET ?",
    { email: email, name: name, username: username, password: hashedPassword },
    (err, results) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    // if (!email || !password) {
    //   return res.status(400).sendFile(__dirname + "/login.html", {
    //     message: "Please Provide an email and password",
    //   });
    // }
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        console.log(results);
        if (
          !results ||
          !(await bcrypt.compare(password, results[0].password))
        ) 
        {
          // res.status(401).sendFile(__dirname + "/login.html", {
          //   message: "Email or Password is incorrect",
          // });
        } 
        else {
          const id = results[0].id;

          const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });

          console.log("the token is " + token);

          const cookieOptions = {
            expires: new Date(
              Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };

          console.log(cookieOptions);
          res.cookie("userSave", token, cookieOptions);
          console.log("Test")
          res.sendStatus(200);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT);
