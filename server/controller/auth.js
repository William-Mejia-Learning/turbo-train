const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");


const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

exports.signup = async (req, res) => {
    const { email, name, username, password } = req.body;

    let hashedPassword = await bcrypt.hash(password, 8);

    db.query('INSERT INTO users SET ?', { email: email, name: name, username:username, password: hashedPassword }, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return results;
        }
    })

    
}