const { Sequelize, DataTypes, SequelizeScopeError } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');
const CharacterInfo = require('./CharacterInfo');

const Background = sequelize.define("Background", {
    BackgroundId: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true
    },
    BackgroundName: {
        type: Sequelize.STRING,
        allownull: false
    },
    Skill1: {
        type: Sequelize.STRING,
        allownull: true
    },
    Skill2: {
        type: Sequelize.STRING,
        allownull: true
    },
    Feature1: {
        type: Sequelize.STRING,
        allownull: true
    },
    Feature2: {
        type: Sequelize.STRING,
        allownull: true
    },
    Feature3: {
        type: Sequelize.STRING,
        allownull: true
    },
    Traits: {
        type: Sequelize.STRING,
        allownull: true
    },
    Ideals: {
        type: Sequelize.STRING,
        allownull: true
    },
    Bonds: {
        type: Sequelize.STRING,
        allownull: true
    },
    Flaws: {
        type: Sequelize.STRING,
        allownull: true
    },
    BackgroundLink: {
        type: Sequelize.STRING,
        allownull: true
    }
},{
    freezeTableName: true
},{
    classMethods: {
        associate:function(models) {
            Background.belongsTo(models.CharacterInfo, { foreignKey: 'BackgroundId' });
        }
    }
});

Background.sync();

/* create test background in db for testing
Background.create({
    BackgroundName: 'Criminal',
    Skill1: 'Deception',
    Skill2: 'Stealth',
    Feature1: 'Criminal Contact',
    Feature2: 'Smuggler Specialty',
    Feature3: '',
    Traits: '6',
    Ideals: '16',
    Bonds: '12',
    Flaws: '18'
}).then(user => {
    console.log(user.get({ plain: true }));
}).catch(err => {
    console.log(err);
});
*/
module.exports = Background;