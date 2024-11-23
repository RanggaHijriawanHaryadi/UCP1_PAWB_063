// routes/routes-bibit.js
const express = require("express");
const router = express.Router();
const controllerBibit = require("../controllers/controller-bibit");

// Route for creating new bibit
router.post("/", controllerBibit.createBibit);

// Route to display all bibit
router.get("/", controllerBibit.getAllBibit);

// Route for editing bibit
router.get("/edit/:id", controllerBibit.editBibit);

// Route for updating bibit
router.post("/update", controllerBibit.updateBibit);

// Route for deleting bibit
router.get("/delete/:id", controllerBibit.deleteBibit);

module.exports = router;
