const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');

const Proficiency = sequelize.define("Proficiency", {
    ProfId: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true
    },
    ProficiencyName: {
        type: Sequelize.STRING,
        allownull: false
    },
    Attribute: {
        type: Sequelize.STRING,
        allownull: true,
        defaultValue: "STR"
    }
});

module.exports = Proficiency;