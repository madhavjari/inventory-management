const express = require("express");
const newCategoryController = require("../controller/newCategoryController");

const newCategoryRouter = express.Router();

newCategoryRouter.get("/newcategory", newCategoryController.getNewCategory);
newCategoryRouter.post("/newcategory", newCategoryController.postNewCategory);

module.exports = newCategoryRouter;
