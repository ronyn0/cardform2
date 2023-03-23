const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');
const Background = require('./Background');
const Features = require('./Features');
const Lineage = require('./Lineage');

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
        allownull: false
    },
    PlayerName: {
        type: Sequelize.STRING,
        allownull: true
    },
    Class: {
        type: Sequelize.STRING,
        foreignKey: true,
        allownull: false
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
        defaultValue: 10
    },
    Bonus: {
        type: Sequelize.INTEGER,
        allownull: true,
        defaultValue: 2
    },
    STR: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10
    },
    DEX: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10
    },
    CON: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10
    },
    INT: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10
    },
    WIS: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10
    },
    CHA: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 10
    },
    Init: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 0
    },
    HP: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 1
    },
    ImgLocation: {
        type: Sequelize.STRING,
        allownull: true,
        defaultValue: 'images/test.jpg'
    }
}, {
    freezeTableName: true
},{
    classMethods: {
        associate:function(models) {
            CharacterInfo.hasOne(models.Background, { foreignKey: 'BackgroundID' });
        },
        associate:function(models) {
            CharacterInfo.hasMany(models.Features, { foreignKey: 'Class' });    
        },
        associate:function(models) {
            CharacterInfo.hasOne(models.Lineage, { foreignKey: 'CharID' });
        }
    }
});
CharacterInfo.hasOne(Background, {
    foreignKey: 'BackgroundID'
});
CharacterInfo.hasOne(Lineage, {
    foreignKey: 'CharId',
    as: 'LineageIdentifier',
    sourceKey: 'CharID'
});
CharacterInfo.hasMany(Features, {
    foreignKey: 'Class',
    sourceKey: 'Class'
})


// use .sync({ alter: true }) to update table
CharacterInfo.sync().then(() => {
    console.log('Table Found!');
    }).catch((error) => {
    console.error('Unable to create table : ', error);
});

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
*/

module.exports = CharacterInfo;