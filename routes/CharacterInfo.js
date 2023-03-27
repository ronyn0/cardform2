// CharacterInfo.js - CharacterInfo route module.

const express = require("express");
const router = express.Router();

// Require controller modules.
const CharacterInfo_Controller = require("../controllers/CharController");

// Home page route (localhost/wiki)
router.get("/", function (req, res) {
  res.render('dndcard', { title: 'Card Form' });
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this project. . . uhhh look here: https://github.com/ronyn0/cardform2/");
});

// Skrank test page route.
//router.get("/skrank", CharacterInfo_Controller.skrank);

// /create puts us through to the new char form
router.get("/create", CharacterInfo_Controller.character_create_get);

// /create post handles the form allegedly
router.post("/create", CharacterInfo_Controller.character_create_post);

// id is the id of a character to display
router.get("/:id", CharacterInfo_Controller.character);

// Export this route as a module so we can require it
// and call it from app.js
module.exports = router;