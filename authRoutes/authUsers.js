const express = require("express");
const bcrypt = require("bcryptjs");
const { validateUser } = require("../middlewares/validateUser");

const User = require("../models/user-model");

const route = express.Router();

// POST /api/auth/register
route.post("/register", (req, res) => {
  let credentials = req.body;

  if (validateUser(req.body)) {
    const hash = bcrypt.hashSync(credentials.password, 8);
    credentials.password = hash;
    User.add(credentials)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errorMessage: "there was an error creating the user" });
      });
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide username and password" });
  }
});

// POST /api/auth/login
route.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!validateUser(req.body)) {
    res
      .status(400)
      .json({ errorMessage: "please provide username and password" });
  } else {
    User.findBy({ username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          req.session.user = {
            id: user.id,
            username: user.username,
          };
          res.status(200).json({ user: username });
        } else {
          res.status(401).json({ errorMessage: "Invalid Credentials" });
        }
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errorMessage: "there was an error when loggin in" });
      });
  }
});

// GET /api/auth/logut
route.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ errorMessage: "there was an error" });
      } else {
        res.status(200).json({ message: "logged out successfully" });
      }
    });
  } else {
    res.status(500).json({ errorMessage: "already logged out" });
  }
});

module.exports = route;
