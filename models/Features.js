const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');
const CharacterInfo = require('./CharacterInfo');

const Features = sequelize.define("Features", {
    FeatureId: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true
    },
    CharID: {
        type: Sequelize.INTEGER,
        allownull: false,
        foreignKey: true
    },
    Level: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    Class: {
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            isAlpha: {
                args:false,
                msg: "Class Name can only contain letters."
            },
        },
    },
    SubClass: {
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            isAlpha: {
                args:false,
                msg: "Sub Class Name can only contain letters."
            },
        },
    },
    FeatureName: {
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            isAlpha: {
                args:false,
                msg: "Feature Name can only contain letters."
            },
        },
    },
    Description: {
        type: Sequelize.STRING,
        allownull: true
    },
    Link: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Feature Links must be a URL."
            },
        },
    }
}, {
    freezeTableName: true
});

//Features.sync(); // don't alter table 
//Features.sync( {alter:true} ); // do alter table
/* add a feature to the db
Features.create({
    Level: '3',
    Class: 'Artificer',
    SubClass: 'Battlesmith',
    FeatureName: 'Extra Attack',
    Description: "Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.",
    Link: 'http://dnd5e.wikidot.com/artificer:battle-smith#toc4'
}).then(user => {
    console.log(user.get({ plain: true }));
}).catch(err => {
    console.log(err);
});
*/

module.exports = Features;