const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');
const CharacterInfo = require('./CharacterInfo');

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
        foreignKey: true,
        validate: {
            isNumeric: {
                args:false,
                msg: "CharID can only contain numbers."
            },
        },
    },
    LineageName: {
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            isAlpha: {
                args:false,
                msg: "Lineage Name can only contain letters."
            },
        },
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
    Feature4: {
        type: Sequelize.STRING,
        allownull: true
    },
    LineageLink: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args:false,
                msg: "Link must be a url."
            },
        },
    }
}, {
freezeTableName: true
},{
    classMethods: {
        associate:function(models) {
            Lineage.belongsTo(models.CharacterInfo, { foreignKey: 'CharId' });
        }
    }
});

Lineage.sync();

/*
Lineage.create({
    CharId: '1',
    LineageName: 'Kobold',
    Feature1: 'Grovel, Cower and Beg',
    Feature2: 'Pack Tactics',
    Feature3: 'Darkvision',
    Feature4: 'Sunlight Sensitivity'
}).then(user => {
    console.log(user.get({ plain: true }));
}).catch(err => {
    console.log(err);
});
*/
module.exports = Lineage;