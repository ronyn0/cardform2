const CharacterInfo = require('../models/CharacterInfo');
const Background = require('../models/Background');
const { body, validationResult } = require('express-validator');

// display homepage
exports.index = (req, res, next) => {
    res.render("index", {
        title: "Background Info",
    })
};

exports.background_create_get = (req, res) => {
    res.send("not implemented background get");
}

exports.background_create_post = (req, res) => {
    res.send("not implemented background get");
}