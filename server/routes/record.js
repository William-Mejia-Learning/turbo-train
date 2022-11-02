const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/signup").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      email: req.body.email,
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    };
    db_connect.collection("users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

module.exports = recordRoutes;