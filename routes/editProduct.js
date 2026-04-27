const express = require("express");
const editProductController = require("../controller/editProductController");

const editProductRouter = express.Router();

editProductRouter.post(
  "/editproduct/:id",
  editProductController.editProductPost,
);

module.exports = editProductRouter;
