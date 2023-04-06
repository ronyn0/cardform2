// /routes/Background.js - Background route module.

const express = require("express");
const router = express.Router();

// Require controller modules.
const Background_Controller = require("../controllers/BackController");

// Home page route (/Background/)
router.get("/", Background_Controller.index);

// New Background form (/Background/create)
router.get("/create", Background_Controller.background_create_get);

// Post handles the form
router.post("/create", Background_Controller.background_create_post);

module.exports = router;