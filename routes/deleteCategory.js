const express = require("express");
const deleteCategoryController = require("../controller/deleteCategoryController");

const deleteCategoryRouter = express.Router();

deleteCategoryRouter.post(
  "/deletecategory/:id",
  deleteCategoryController.deleteCategoryPost,
);

module.exports = deleteCategoryRouter;
