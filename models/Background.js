const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');

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
    }
});

module.exports = Background;