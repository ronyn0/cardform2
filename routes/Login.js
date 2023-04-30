// /routes/Login.js - Login route module.

const express = require("express");
const router = express.Router();

// Require controller modules.
const Login_Controller = require("../controllers/LoginController");

// Home page route (/Login)
router.get("/", Login_Controller.index);

// Process login post (/Login/auth)
router.post("/auth", Login_Controller.auth);

// Test session (/Login/home)
router.get("/home", Login_Controller.home);

module.exports = router;