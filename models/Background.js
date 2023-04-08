const { Sequelize, DataTypes, SequelizeScopeError } = require("sequelize");
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
        allownull: false,
        validate: {
            is: {
                args: /^[a-z ]+$/i, // string contains letters and spaces
                msg: "Background Name can only contain letters."
            },
        },
    },
    Skill1: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            is: {
                args: /^[a-z ]+$/i, // string contains letters and spaces
                msg: "Skills can only contain letters."
            },
        },
    },
    Skill2: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            is: {
                args: /^[a-z ]+$/i, // string contains letters and spaces
                msg: "Skills can only contain letters."
            },
        },
    },
    Feature1: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            is: {
                args: /^[a-z ]+$/i, // string contains letters and spaces
                msg: "Feature 1 can only contain letters."
            },
        },
    },
    Feature2: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            is: {
                args: /^[a-z ]+$/i, // string contains letters and spaces
                msg: "Feature 2 can only contain letters."
            },
        },
    },
    Feature3: {
        type: Sequelize.STRING,
        allownull: true
    },
    Feature1Link: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Feature 1 Links must be a URL."
            },
        },
    },
    Feature2Link: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Feature 2 Links must be a URL."
            },
        },
    },
    Feature3Link: {
        type: Sequelize.STRING,
        allownull: true
    },
    Traits: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: "Traits must be shorter than 255 characters."
            },
        },
    },
    Ideals: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: "Ideals must be shorter than 255 characters."
            },
        },
    },
    Bonds: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: "Bonds must be shorter than 255 characters."
            },
        },
    },
    Flaws: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: "Flaws must be shorter than 255 characters."
            },
        },
    },
    BackgroundLink: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Background Links must be a URL."
            },
        },
    }
}, {
    freezeTableName: true
}, {
    classMethods: {
        associate: function (models) {
            Background.belongsTo(models.CharacterInfo, { foreignKey: 'BackgroundID' });
        }
    }
});

//Background.sync();  // no alter
//Background.sync( {alter:true} );  // does alter

/* create test background in db for testing
Background.create({
    BackgroundName: 'Criminal',
    Skill1: 'Deception',
    Skill2: 'Stealth',
    Feature1: 'Criminal Contact',
    Feature2: 'Smuggler Specialty',
    Feature3: '',
    Traits: '6',
    Ideals: '16',
    Bonds: '12',
    Flaws: '18'
}).then(user => {
    console.log(user.get({ plain: true }));
}).catch(err => {
    console.log(err);
});
*/
module.exports = Background;