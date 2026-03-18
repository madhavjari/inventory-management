const express = require("express");
const newProductController = require("../controller/newProductController");

const newProductRouter = express.Router();

newProductRouter.get("/newproduct", newProductController.getNewProduct);
newProductRouter.post("/newproduct", newProductController.postNewProduct);

module.exports = newProductRouter;
