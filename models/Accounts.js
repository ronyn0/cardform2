const { Sequelize, DataTypes, SequelizeScopeError } = require("sequelize");
async = require('async');
const sequelize = require('../database/sequelize');

const Accounts = sequelize.define("Accounts", {
    id: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true,
        validate: {
            is: {
                args: /^[a-z0-9]+$/i, // string contains letters and numbers
                msg: "Username can only contain letters and numbers."
            },
            len: [2,50]
        }
    },
    password: {
        type: Sequelize.STRING,
        allownull: false,
        vallidate: {
            isAplhaNumeric: {
                msg: "Password must contain letters and numbers."
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allownull: false,
        vallidate: {
            isEmail: {
                msg: "Email must be an email format."
            },
            len: [2,100]
        }
    },
    role: {
        type: Sequelize.STRING,
        allownull: true,
        defaultValue: 'User'
    }
}, {
    freezeTableName: true
});

/*
Accounts.create({
    username: 'test',
    password: 'test',
    email: 'test@test.com'
}).then(user => {
    console.log(user.get({ plain: true }));
}).catch(err => {
    console.log(err);
});
*/

//Accounts.sync();  // no alter
//Accounts.sync( {alter:true} );  // does alter

module.exports = Accounts;