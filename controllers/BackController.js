const CharacterInfo = require('../models/CharacterInfo');
const Background = require('../models/Background');
const { body, validationResult } = require('express-validator');

// display homepage
exports.index = (req, res, next) => {
    res.render("index", {
        title: "Background Info",
    })
};

exports.background_create_get = (req, res, next) => {
    const char = CharacterInfo.findOne({
        where: { CharID: 2 },
    }).then((char) => {
        res.render("back_form", {
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

exports.background_create_post = (req, res) => {
    const errors = validationResult(req);
    var sqlzerrors = [];

    if (!errors.isEmpty()) {
        // There are errors, render the form again 
        const char = CharacterInfo.findOne({
            where: { CharID: 2 }
        }).then((char) => {
            res.render("back_form", {
                title: char.Name,
                char_info: char,
                sortFeatures: function (a) {
                    a.sort(function compareFn(a, b) { return a.Level - b.Level; })
                }
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
        var newBack = Background.build({
            BackgroundName: req.body.name,
            BackgroundLink: req.body.backgroundLink,
            Skill1: req.body.skill1,
            Skill2: req.body.skill2,
            Feature1: req.body.feature1,
            Feature1Link: req.body.feature1Link,
            Feature2: req.body.feature2,
            Feature2Link: req.body.feature2Link,
            Feature3: req.body.feature3,
            Feature3Link: req.body.feature3Link,
            Traits: req.body.traits,
            Ideals: req.body.ideals,
            Bonds: req.body.bonds,
            Flaws: req.body.flaws
        });
        //console.log(newBack.get({ plain: true }));
        newBack.validate().then(newBack => {
            newBack.save().then(result => {
                //console.log(result.BackgroundId); // if the save is successful get the id
                //console.log(req.body.CharID);
                CharacterInfo.update({ BackgroundID: result.BackgroundId }, {
                    where: { CharID: req.body.CharID,}
                    }).then(result => {
                        res.redirect(301, '/CharacterInfo/' + req.body.CharID)
                    });
            })
        }).catch(sqlzerrors => {
            const char = CharacterInfo.findOne({
                where: { CharID: req.body.CharID }
            }).then((char) => {
                res.render("back_form", {
                    title: char.Name,
                    char_info: char,
                    errors: sqlzerrors.errors,
                    sortFeatures: function (a) {
                        a.sort(function compareFn(a, b) { return a.Level - b.Level; })
                    }
                })
            }).catch(function (err) {
                res.status(500);
                res.render('error', { error: err }) //show the error info
                res.render('error', {
                    message: 'Character not found',
                    error: err,
                });
            });
            //console.log(sqlzerrors); // log validation errors 
        });
        //console.log("passes validation"); // passes validation, save it and redirect
    }
}