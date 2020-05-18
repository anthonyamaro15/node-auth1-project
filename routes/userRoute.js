const express = require("express");
const User = require("../models/user-model");

const route = express.Router();

route.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error " });
    });
});

module.exports = route;
