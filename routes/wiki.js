// wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route (localhost/wiki)
router.get("/", function (req, res) {
  res.render('dndcard', { title: 'Card Form' });
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

// Export this route as a module so we can require it
// and call it from app.js
module.exports = router;