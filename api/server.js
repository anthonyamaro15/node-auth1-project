const express = require("express");
const cors = require("cors");
const session = require("express-session");
const helmet = require("helmet");

const authUser = require("../authRoutes/authUsers");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/auth", authUser);

module.exports = server;
