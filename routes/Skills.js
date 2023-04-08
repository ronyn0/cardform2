// /routes/Skills.js - Skill route module.

const express = require("express");
const router = express.Router();

// Require controller modules.
const Skill_Controller = require("../controllers/SkillController");

// Home page route (/Skill/)
router.get("/", Skill_Controller.index);

// New Skill form (/Skill/create)
router.get("/create", Skill_Controller.skill_create_get);

// Post handles the form
router.post("/create", Skill_Controller.skill_create_post);

module.exports = router;