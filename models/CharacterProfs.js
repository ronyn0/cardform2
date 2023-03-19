const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');

const CharacterProfs = sequelize.define("CharacterProfs", {
    CharID: {
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        foreignKey: true
    },
    ProfID: {
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        foreignKey: true
    }
}, {
    freezeTableName: true
});

CharacterProfs.sync();

module.exports = CharacterProfs;