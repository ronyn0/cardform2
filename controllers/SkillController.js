const CharacterInfo = require('../models/CharacterInfo');
const { body, validationResult } = require('express-validator');

// display homepage
exports.index = (req, res, next) => {
    res.render("index", {
        title: "Skill Info",
    })
};

exports.skill_create_get = (req, res, next) => {
    const char = CharacterInfo.findOne({
        where: { CharID: 2 },
    }).then((char) => {
        res.render("skill_form", {
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
}

exports.skill_create_post = (req, res) => {
    res.send("not implemented skill post");
}