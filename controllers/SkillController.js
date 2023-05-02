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
            char_info: char,
            username: req.session.username
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
            //console.log(req.body.Acrobatics); // log the built skill
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
            //console.log(Arcana); // log the built skill
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
        var Deception = Skills.create({
            Name: 'Deception',
            IsProficient: req.body.Deception,
            Attribute: 'CHA'
        }).then((Deception) => {
            char.addSkill(Deception);
        });
        var History = Skills.create({
            Name: 'History',
            IsProficient: req.body.History,
            Attribute: 'INT'
        }).then((History) => {
            //console.log(Athletics); // log the built skill
            char.addSkill(History);
        });
        var Insight = Skills.create({
            Name: 'Insight',
            IsProficient: req.body.Insight,
            Attribute: 'WIS'
        }).then((Insight) => {
            //console.log(Insight); // log the built skill
            char.addSkill(Insight);
        });
        var Intimidation = Skills.create({
            Name: 'Intimidation',
            IsProficient: req.body.Intimidation,
            Attribute: 'CHA'
        }).then((Intimidation) => {
            //console.log(Intimidation); // log the built skill
            char.addSkill(Intimidation);
        });
        var Investigation = Skills.create({
            Name: 'Investigation',
            IsProficient: req.body.Investigation,
            Attribute: 'INT'
        }).then((Investigation) => {
            //console.log(Investigation); // log the built skill
            char.addSkill(Investigation);
        });
        var Medicine = Skills.create({
            Name: 'Medicine',
            IsProficient: req.body.Medicine,
            Attribute: 'WIS'
        }).then((Medicine) => {
            //console.log(Medicine); // log the built skill
            char.addSkill(Medicine);
        });
        var Nature = Skills.create({
            Name: 'Nature',
            IsProficient: req.body.Nature,
            Attribute: 'WIS'
        }).then((Nature) => {
            //console.log(Nature); // log the built skill
            char.addSkill(Nature);
        });
        var Perception = Skills.create({
            Name: 'Perception',
            IsProficient: req.body.Perception,
            Attribute: 'WIS'
        }).then((Perception) => {
            //console.log(Perception); // log the built skill
            char.addSkill(Perception);
        });
        var Performance = Skills.create({
            Name: 'Performance',
            IsProficient: req.body.Performance,
            Attribute: 'CHA'
        }).then((Performance) => {
            //console.log(Performance); // log the built skill
            char.addSkill(Performance);
        });
        var Persuasion = Skills.create({
            Name: 'Persuasion',
            IsProficient: req.body.Persuasion,
            Attribute: 'CHA'
        }).then((Persuasion) => {
            //console.log(Persuasion); // log the built skill
            char.addSkill(Persuasion);
        });
        var Religion = Skills.create({
            Name: 'Religion',
            IsProficient: req.body.Religion,
            Attribute: 'INT'
        }).then((Religion) => {
            //console.log(Religion); // log the built skill
            char.addSkill(Religion);
        });
        var SleightofHand = Skills.create({
            Name: 'Sleight of Hand',
            IsProficient: req.body.SleightofHand,
            Attribute: 'DEX'
        }).then((SleightofHand) => {
            //console.log(SleightofHand); // log the built skill
            char.addSkill(SleightofHand);
        });
        var Stealth = Skills.create({
            Name: 'Stealth',
            IsProficient: req.body.Stealth,
            Attribute: 'DEX'
        }).then((Stealth) => {
            //console.log(Stealth); // log the built skill
            char.addSkill(Stealth);
        });
        var Survival = Skills.create({
            Name: 'Survival',
            IsProficient: req.body.Survival,
            Attribute: 'WIS'
        }).then((Survival) => {
            //console.log(Survival); // log the built skill
            char.addSkill(Survival).then(() => {
                res.redirect(301, '/CharacterInfo/' + char.CharID)
            });
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