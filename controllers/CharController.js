const CharacterInfo = require('../models/CharacterInfo');
const Background = require('../models/Background');
const Features = require('../models/Features');
const Lineage = require('../models/Lineage');
const Skills = require('../models/Skills');
const async = require('async');
const { Sequelize } = require('sequelize');

// display homepage
exports.index = (req, res, next) => {
    var mycount = Customer.count().then((mycount) => {
        //console.log(mycount);
        res.render("index", {
            title: "Card Form",
            data: mycount,
        })
    });
    //console.log(mycount); testing output from the function
};

exports.skrank = (req, res, next) => {
    const char = CharacterInfo.findOne({
        where: { Name: 'Skrank' }
    }).then((char) => {
        res.render("dndcard", {
            title: char.Name, 
            char_info: char,
        })
    });
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
        //console.log(char.LineageIdentifier);
        res.render("dndcard", {
            title: char.Name, 
            char_info: char,
        })
    }).catch(function (err) {
        res.status(500);
        res.render('error', {error: err}) //show the error info
        res.render('error', {
            message: 'Character not found',
            error: err,
        });
    })
    //console.log(char.toJSON());
};