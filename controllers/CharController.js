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
        title: "Character Info",
    })
};

exports.character = (req, res, next) => {
    const char = CharacterInfo.findOne({
        where: { CharID: req.params.id },
        include: [
            { model: Background },
            { model: Features, as: 'Features' },
            { model: Lineage, as: 'LineageIdentifier' },
            { model: Skills }],
        order: [[{ model: Skills }, 'Name', 'asc']]
    }).then((char) => {
        res.render("dndcard", {
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
};

// Display character create form on http GET request
exports.character_create_get = (req, res, next) => {
    res.render("char_form", { title: "Create Character" });
};

// Handle character create on http POST request
exports.character_create_post = [
    // Validates and sanitizes name field.
    body("name", "Character name required").trim().isLength({
        min: 1
    }).escape(),

    // Process request after validation and sanitation
    (req, res, next) => {
        // Extract the validation errors from a request
        const errors = validationResult(req);
        const file = req.files.myFile;
        var sqlzerrors = []; // validation errors

        // Create a character object with escaped and trimmed data
        // TO-DO sequelize build + save

        if (!errors.isEmpty()) {
            // There are errors, render the form again 
            res.render("char_form", {
                title: "Create Character",
                errors: errors.array(),
            });
            return;
        } else {
            // Data from the form is valid
            var newChar = CharacterInfo.build({
                Name: req.body.name,
                PlayerName: req.body.playername,
                Class: req.body.class,
                Lineage: req.body.lineage,
                Init: req.body.init,
                AC: req.body.ac,
                HP: req.body.hp,
                ImgLocation: '/images/' + file.name,
                STR: req.body.str,
                DEX: req.body.dex,
                CON: req.body.con,
                INT: req.body.int,
                WIS: req.body.wis,
                CHA: req.body.cha,
            });
            newChar.validate().then(newChar => {
                console.log(newChar.get({ plain: true })); // print char if valid
            }).catch(sqlzerrors => {
                res.render("char_form", {
                    title: "Create Character",
                    errors: sqlzerrors.errors,
                });
                //console.log(sqlzerrors); // log validation errors 
            });
            // looks like build works
            // Check if character with that name exists
            isUnique(newChar.Name).then(uniqueCheck => {
                if (uniqueCheck && sqlzerrors.length > 0) { // if it is unique and no val errors
                    // save character here and redirect
                    console.log("create character here");

                    // file upload section
                    if (!req.files) {
                        //return res.status(400).send("No files were uploaded.");
                        console.log("No files uploaded");
                    }

                    const newPath = '/home/ron/Workspace/cardform2/public/images/' + file.name;

                    fs.readFile(newPath, (err, data) => {
                        if (!err && data) {
                            res.render("char_form", { title: "File already exists" });
                        } else {
                            file.mv(newPath, (err) => {
                                if (err) {
                                    return res.status(500).send(err);
                                }
                                // return res.send({ status: "success", path: newPath }); post success
                                //res.render("char_form", { title: "File Uploaded" });
                            });
                        }
                    });
                }
                if (!uniqueCheck) {  // redirect to found char
                    const char = CharacterInfo.findOne({
                        where: { Name: newChar.Name },
                    }).then((char) => {
                        res.redirect(301, '/CharacterInfo/' + char.CharID);
                    }).catch(function (err) {
                        res.status(500);
                        res.render('error', { error: err }) //show the error info
                        res.render('error', {
                            message: 'Character not found',
                            error: err,
                        });
                    })
                }
            })
        }
    }];

// Function to check if a character is unique
function isUnique(id) {
    return CharacterInfo.count({ where: { Name: id } })
        .then(count => {
            if (count != 0) {
                //console.log("character found");
                return false;
            }
            return true;
        });
}