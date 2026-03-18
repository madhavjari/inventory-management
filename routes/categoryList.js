const express = require("express");
const categoryListController = require("../controller/categoryListController");

const categoryListRouter = express.Router();

categoryListRouter.get("/categorylist", categoryListController.getList);

module.exports = categoryListRouter;
