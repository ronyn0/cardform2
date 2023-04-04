const CharacterInfo = require('../models/CharacterInfo');
const Background = require('../models/Background');
const Features = require('../models/Features');
const Lineage = require('../models/Lineage');
const Skills = require('../models/Skills');
const { body, validationResult } = require('express-validator');

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

// Handle lineage create on post
exports.lineage_create_post = [(req, res, next) => {
    // Extract the validation errors from a request
    const errors = validationResult(req);
    var sqlzerrors = []; // validation errors

    if (!errors.isEmpty()) {
        // There are errors, render the form again 
        const char = CharacterInfo.findOne({
            where: { CharID: req.body.CharID },
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
        return;
    } else {
        // Data from the form is valid
        var newLine = Lineage.build({
            CharId: req.body.CharID,
            LineageName: req.body.name,
            Feature1: req.body.feature1,
            Feature2: req.body.feature2,
            Feature3: req.body.feature3,
            Feature4: req.body.feature4,
            LineageLink: req.body.link,
        });
        newLine.validate().then(newLine => {
            console.log(newLine.get({ plain: true })); // print line if valid
            // new line is valid so save it, plug it into the char, redirect
            newLine.save().then(result => {
                console.log(result.CharId);
                res.redirect(301, '/CharacterInfo/' + result.CharId);
            })
        }).catch(sqlzerrors => {
            const char = CharacterInfo.findOne({
                where: { CharID: req.body.CharID },
            }).then((char) => {
                res.render("line_form", {
                    title: char.Name,
                    char_info: char,
                    errors: sqlzerrors.errors
                })
            }).catch(function (err) {
                res.status(500);
                res.render('error', { error: err }) //show the error info
                res.render('error', {
                    message: 'Character not found',
                    error: err,
                });
            })
        });
    }
}];