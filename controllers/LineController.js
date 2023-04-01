const CharacterInfo = require('../models/CharacterInfo');
const Background = require('../models/Background');
const Features = require('../models/Features');
const Lineage = require('../models/Lineage');
const Skills = require('../models/Skills');
const { body, validationResult } = require('express-validator');
const fs = require('fs');

// display homepage
exports.index = (req, res, next) => {
    res.render("index", {
        title: "Lineage Info",
    })
};

// Display lineage create form on http GET request
exports.lineage_create_get = (req, res, next) => {
    const char = CharacterInfo.findOne({
        where: { CharID: 2 },
    }).then((char) => {
        res.render("line_form", {
            title: char.Name,
            char_info: char
        })
    }).catch(function (err) {
        res.status(500);
        res.render('error', { error: err }) //show the error info
        res.render('error', {
            message: 'Character not found',
            error: err,
        });
    })
};

exports.lineage_create_post = (req, res, next) => {
    console.log("not implemented");
};