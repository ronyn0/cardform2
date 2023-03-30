// /routes/CharacterInfo.js - CharacterInfo route module.

const express = require("express");
const router = express.Router();

// Require controller modules.
const CharacterInfo_Controller = require("../controllers/CharController");

// Home page route (/CharacterInfo/)
router.get("/", CharacterInfo_Controller.index);

// About page route (/CharacterInfo/about)
router.get("/about", function (req, res) {
  res.render("about.pug", {title: "About page" })
});

// New char form (/CharacterInfo/create)
router.get("/create", CharacterInfo_Controller.character_create_get);

// Post handles the form
router.post("/create", CharacterInfo_Controller.character_create_post);

// Finds a character and displays it (/CharacterInfo/:id)
router.get("/:id", CharacterInfo_Controller.character);

// Export this route as a module so we can require it
// and call it from app.js
module.exports = router;