const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');

const Lineage = sequelize.define("Lineage", {
    LineageId: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true
    },
    CharId: {
        type: Sequelize.INTEGER,
        allownull: true,
        foreignKey: false
    },
    LineageName: {
        type: Sequelize.STRING,
        allownull: false
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
    }
}, {
freezeTableName: true
});

Lineage.sync();

module.exports = Lineage;