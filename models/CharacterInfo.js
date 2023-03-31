const { seq } = require("async");
const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');
const Background = require('./Background');
const Features = require('./Features');
const Lineage = require('./Lineage');
const Skills = require('./Skills');

const CharacterInfo = sequelize.define("CharacterInfo", {
    CharID: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            isAlpha: true,
        },
    },
    PlayerName: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: true,
        },
    },
    Class: {
        type: Sequelize.STRING,
        foreignKey: true,
        allownull: false,
        validate: {
            isAlpha: true,
        },
    },
    BackgroundID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allownull: true
    },
    Lineage: {
        type: Sequelize.STRING,
        allownull: false,
        defaultValue: "human"
    },
    AC: {
        type: Sequelize.INTEGER,
        allownull: true,
        defaultValue: 10,
        validate: {
            isInt: true,
        },
    },
    Bonus: {
        type: Sequelize.INTEGER,
        allownull: true,
        defaultValue: 2,
        validate: {
            isInt: true,
        },
    },
    STR: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10,
        validate: {
            isInt: true,
            is:/^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/,
        },
    },
    DEX: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10,
        validate: {
            isInt: true,
            is:/^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/,
        },
    },
    CON: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10,
        validate: {
            isInt: true,
            is:/^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/,
        },
    },
    INT: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10,
        validate: {
            isInt: true,
            is:/^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/,
        },
    },
    WIS: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10,
        validate: {
            isInt: true,
            is:/^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/,
        },
    },
    CHA: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10,
        validate: {
            isInt: true,
            is:/^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/,
        },
    },
    Init: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 0,
        validate: {
            isInt: true,
        },
    },
    HP: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 1,
        validate: {
            isInt: true,
        },
    },
    ImgLocation: {
        type: Sequelize.STRING,
        allownull: true,
        defaultValue: 'images/test.jpg'
    },
    Save1: {
        type: Sequelize.STRING,
        allownull: true
    },
    Save2: {
        type: Sequelize.STRING,
        allownull: true
    }
}, {
    freezeTableName: true
},{
    classMethods: {
        associate:function(models) {
            CharacterInfo.hasOne(models.Background, { foreignKey: 'BackgroundId' });
        },
        associate:function(models) {
            CharacterInfo.hasMany(models.Features, { foreignKey: 'CharID' });    
        },
        associate:function(models) {
            CharacterInfo.hasOne(models.Lineage, { foreignKey: 'CharID' });
        }
    }
});
CharacterInfo.hasOne(Background, {
    foreignKey: 'BackgroundId'
});
CharacterInfo.hasOne(Lineage, {
    foreignKey: 'CharId',
    as: 'LineageIdentifier',
    sourceKey: 'CharID'
});
CharacterInfo.hasMany(Features, {
    foreignKey: 'CharID',
    sourceKey: 'CharID'
});

Skills.belongsToMany(CharacterInfo, { 
    through: 'Char_Skills',
    sourceKey: 'SkillID' });
CharacterInfo.belongsToMany(Skills, { 
    through: 'Char_Skills',
    sourceKey: 'CharID' });


CharacterInfo.sync(); //don't alter
//CharacterInfo.sync({alter:true}); // do alter

// true-up the whole database
//sequelize.sync( { alter: true }); 

/* create skrank in db for testing
CharacterInfo.create({
    Name: 'Skrank',
    PlayerName: 'Ron',
    Class: 'Artificer',
    Lineage: 'Kobold',
    AC: '15',
    Bonus: '3',
    STR: '6',
    DEX: '16',
    CON: '12',
    INT: '18',
    WIS: '8',
    CHA: '8',
    Init: '3',
    HP: '45'
}).then(user => {
    console.log(user.get({ plain: true }));
}).catch(err => {
    console.log(err);
}); 

const ath = Skills.create({ //jesus fucking christ chain promises
    Name: 'Persuasion',
    IsProficient: false,
    Attribute: 'CHA'
}).then(ath => {
    const s = CharacterInfo.findOne({
    where: { CharId: 1 }
}).then(s => {
    s.addSkills(ath);
});
});*/

module.exports = CharacterInfo;

//now clean all this shit up