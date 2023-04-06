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
            isAlpha: {
                args: false,
                msg: "Background Name can only contain letters."
            },
        },
    },
    Skill1: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Skill can only contain letters."
            },
        },
    },
    Skill2: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Skill can only contain letters."
            },
        },
    },
    Feature1: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Feature 1 can only contain letters."
            },
        },
    },
    Feature2: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Feature 2 can only contain letters."
            },
        },
    },
    Feature3: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Feature 3 can only contain letters."
            },
        },
    },
    Feature1Link: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Links must be a URL."
            },
        },
    },
    Feature2Link: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Links must be a URL."
            },
        },
    },
    Feature3Link: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Links must be a URL."
            },
        },
    },
    Traits: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Traits can only contain letters."
            },
        },
    },
    Ideals: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Ideals can only contain letters."
            },
        },
    },
    Bonds: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Bonds can only contain letters."
            },
        },
    },
    Flaws: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isAlpha: {
                args: false,
                msg: "Flaws can only contain letters."
            },
        },
    },
    BackgroundLink: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
            isURL: {
                args: false,
                msg: "Links must be a URL."
            },
        },
    }
}, {
    freezeTableName: true
}, {
    classMethods: {
        associate: function (models) {
            Background.belongsTo(models.CharacterInfo, { foreignKey: 'BackgroundId' });
        }
    }
});

Background.sync();  // no alter
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