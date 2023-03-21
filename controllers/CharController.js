const CharacterInfo = require('../models/CharacterInfo');
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
            image: char.ImgLocation,
        })
    });
};