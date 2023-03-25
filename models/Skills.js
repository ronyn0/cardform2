const { Sequelize, DataTypes, SequelizeScopeError } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');
const CharacterInfo = require('./CharacterInfo');

const Skills = sequelize.define("Skills", {
    SkillID: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        foreignKey: true,
        autoIncrement: true
    },
    Name: {
        type: Sequelize.STRING,
        allownull: false
    },
    IsProficient: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    Attribute: { 
        type: Sequelize.STRING,
        allownull: false
    }
},{
    freezeTableName: true
});

module.exports = Skills;