const express = require("express");
const editCategoryController = require("../controller/editCategoryController");

const editCategoryRouter = express.Router();

editCategoryRouter.post(
  "/editcategory/:id",
  editCategoryController.editCategoryPost,
);

module.exports = editCategoryRouter;
