const express = require("express");
const deleteProductController = require("../controller/deleteProductController");

const deleteProductRouter = express.Router();

deleteProductRouter.post(
  "/deleteproduct/:id",
  deleteProductController.deleteProductPost,
);

module.exports = deleteProductRouter;
