const express = require("express");
const cors = require("cors");
const session = require("express-session");
const helmet = require("helmet");

const authUser = require("../authRoutes/authUsers");
const userRoute = require("../routes/userRoute");

const { restricted } = require("../middlewares/restricted-middlewares");

const server = express();

const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.SECURE_COOKIE || false,
    hhtpOnly: true,
  },
  resave: false,
  saveUninitialized: process.env.ALLOW_COOKIES || true,
  name: "cookie_name",
  secret: process.env.COOKIE_SECRET || "cookiesecret",
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use("/api/auth", authUser);
server.use("/api/users", restricted, userRoute);

module.exports = server;
