const Customer = require('../models/customers');
const async = require('async');
const { Sequelize } = require('sequelize');

// display homepage
exports.index = (req, res, next) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  };

// display listof all customers using a promise
// then you call the variable in the promise so you can use it
exports.customer_list = (req, res, next) => {
    var mycount = Customer.count().then((mycount) => {
        //console.log(mycount);
        res.render("index", {
            title: "Card Form",
            //error: err,
            data: mycount,
        })
    });
    //console.log(mycount);
  };

// display detail page for a specific customer
exports.customer_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: customer detail: ${req.params.id}`);
};

// display customer create form on GET.
exports.customer_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: customer create GET");
  };

// handle customer create on POST.
exports.customer_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: customer create POST");
  };

// display customer delete form on GET.
exports.customer_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: customer delete GET");
  };

// handle customer delete on POST.
exports.customer_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: customer delete POST");
  };

// display customer update on GET.
exports.customer_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: customer update GET");
  };
  
// handle customer update on POST.
exports.customer_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: customer update POST");
  };