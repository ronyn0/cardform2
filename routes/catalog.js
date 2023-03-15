const express = require("express");
const router = express.Router();

// Require controller modules.
const customer_controller = require("../controllers/customerController");

// customer ROUTES //

// GET request for creating customer. 
// NOTE This must come before route for id (i.e. display customer).
router.get("/customers/create", customer_controller.customer_create_get);

// POST request for creating customer.
router.post("/customers/create", customer_controller.customer_create_post);

// GET request to delete customer.
router.get("/customers/:id/delete", customer_controller.customer_delete_get);

// POST request to delete customer.
router.post("/customers/:id/delete", customer_controller.customer_delete_post);

// GET request to update customer.
router.get("/customers/:id/update", customer_controller.customer_update_get);

// POST request to update customer.
router.post("/customers/:id/update", customer_controller.customer_update_post);

// GET request for one customer.
router.get("/customers/:id", customer_controller.customer_detail);

// GET request for list of all customers.
router.get("/customers", customer_controller.index);

// GET request for list of all customers.
router.get("/customers_list", customer_controller.customer_list);

module.exports = router;