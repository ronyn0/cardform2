const CharacterInfo = require('../models/CharacterInfo');
const Skills = require('../models/Skills');
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

exports.skill_create_post = (req, res, next) => {
    const char = CharacterInfo.findOne({
        where: { CharID: req.body.CharID },
    }).then((char) => {
        var Acrobatics = Skills.create({
            Name: 'Acrobatics',
            IsProficient: req.body.Acrobatics,
            Attribute: 'DEX'
        }).then((Acrobatics) => {
            //console.log(Acrobatics); // log the built skill
            char.addSkill(Acrobatics);
        });
        var AnimalHandling = Skills.create({
            Name: 'Animal Handling',
            IsProficient: req.body.AnimalHandling,
            Attribute: 'WIS'
        }).then((AnimalHandling) => {
            //console.log(AnimalHandling); // log the built skill
            char.addSkill(AnimalHandling);
        });
        var Arcana = Skills.create({
            Name: 'Arcana',
            IsProficient: req.body.Arcana,
            Attribute: 'INT'
        }).then((Arcana) => {
            console.log(Arcana); // log the built skill
            char.addSkill(Arcana);
        });
        var Athletics = Skills.create({
            Name: 'Athletics',
            IsProficient: req.body.Athletics,
            Attribute: 'STR'
        }).then((Athletics) => {
            //console.log(Athletics); // log the built skill
            char.addSkill(Athletics);
        });
    }).catch(function (err) {
        res.status(500);
        res.render('error', { error: err }) //show the error info
        res.render('error', {
            message: 'Character not found',
            error: err,
        });
    })
}