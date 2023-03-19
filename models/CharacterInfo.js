const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');

const CharacterInfo = sequelize.define("CharacterInfo", {
    CharID: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true
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
        allownull: false
    },
    BackgroundID: {
        type: Sequelize.INTEGER,
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
    }
});

module.exports = CharacterInfo;