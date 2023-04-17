const CharacterInfo = require('../models/CharacterInfo');
const Feature = require('../models/Features');
const { body, validationResult } = require('express-validator');

// display homepage
exports.index = (req, res, next) => {
    res.render("index", {
        title: "Feature Info",
    })
};

exports.features_create_get = (req, res, next) => {
    const char = CharacterInfo.findOne({
        where: { CharID: 2 },
    }).then((char) => {
        res.render("feat_form", {
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

exports.features_create_post = (req, res, next) => {
    const errors = validationResult(req);
    var sqlzerrors = [];

    if (!errors.isEmpty()) {
        // There are errors, render the form again 
        const char = CharacterInfo.findOne({
            where: { CharID: 2 }
        }).then((char) => {
            res.render("feat_form", {
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
        var newFeat = Feature.build({
            FeatureName: req.body.name,
            Link: req.body.link,
            Level: req.body.level,
            Class: req.body.class,
            SubClass: req.body.subclass,
            Description: req.body.description,
            CharID: req.body.CharID
        });
        console.log(newFeat.get({ plain: true }));
        newFeat.validate().then(newFeat => {
            newFeat.save().then(result => {
                res.redirect(301, '/CharacterInfo/' + req.body.CharID)
            });
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