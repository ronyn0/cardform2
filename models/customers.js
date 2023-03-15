const { Sequelize, DataTypes } = require("sequelize");
async = require('async');
//const { UPSERT } = require("sequelize/types/query-types");
const sequelize = require('../database/sequelize');

const Customers = sequelize.define("Customers", {
    id: {
        type: Sequelize.INTEGER,
        allownull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allownull: true
    },
    address: {
        type: Sequelize.STRING,
        allownull: true
    }
 });

module.exports = Customers;

// Customers model complete and lines up with the database

/* now some commands to test the interaction, like sync

sequelize.sync().then(() => {
    console.log('Table Found!');
    }).catch((error) => {
    console.error('Unable to create table : ', error);
});

// Customers.create makes a new object and inserts it 

Customers.create({
    name: 'Joe',
    address: 'Fake Street 1'
}).then(user => {
    console.log(user.get({ plain: true }));
}).catch(err => {
    console.log(err);
});

// Customers.findAll is like a select * from with more info 

Customers.findAll().then(customers => {
    console.log(customers);
}).catch(err => {
    console.log(err);
});

// Customers.findOne is like a search for one item

Customers.findOne({
    where: { id: 18 }
}).then(user => {
    console.log(user.name);
}).catch(err => {
    console.log(err);
});

// update to update records, I'm running out of steam it's late

Customers.update({
    name: 'Joe'
}, {
    where: { id: 18 }
}).then(() => {
    console.log('Customer name updated.');
}).catch(err => {
    console.log(err);
});

// test the model
console.log(Customers === sequelize.models.Customers);
*/