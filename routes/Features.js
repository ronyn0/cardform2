// /routes/Features.js - Features route module.

const express = require("express");
const router = express.Router();

// Require controller modules.
const Features_Controller = require("../controllers/FeatController");

// Home page route (/Features/)
router.get("/", Features_Controller.index);

// New Features form (/Features/create)
router.get("/create", Features_Controller.features_create_get);

// Post handles the form
router.post("/create", Features_Controller.features_create_post);

module.exports = router;