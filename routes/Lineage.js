// /routes/Lineage.js - Lineage route module.

const express = require("express");
const router = express.Router();

// Require controller modules.
const Lineage_Controller = require("../controllers/LineController");

// Home page route (/Lineage/)
router.get("/", Lineage_Controller.index);

// New lineage form (/Lineage/create)
router.get("/create", Lineage_Controller.lineage_create_get);

// Post handles the form
router.post("/create", Lineage_Controller.lineage_create_post);

module.exports = router;