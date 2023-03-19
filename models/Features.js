const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');

const Features = sequelize.define("Features", {
    FeatureId: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true
    },
    Level: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    Class: {
        type: Sequelize.STRING,
        allownull: false,
        foreignKey: true
    },
    SubClass: {
        type: Sequelize.STRING,
        allownull: false
    },
    FeatureName: {
        type: Sequelize.STRING,
        allownull: false
    },
    Description: {
        type: Sequelize.STRING,
        allownull: true
    },
    Link: {
        type: Sequelize.STRING,
        allownull: true
    }
});

module.exports = Features;