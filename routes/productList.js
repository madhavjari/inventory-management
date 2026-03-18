const express = require("express");
const productListController = require("../controller/productListController");

const productListRouter = express.Router();

productListRouter.get("/productlist", productListController.getList);

module.exports = productListRouter;
