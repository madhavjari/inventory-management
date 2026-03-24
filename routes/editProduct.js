const express = require("express");
const editProductController = require("../controller/editProductController");

const editProductRouter = express.Router();

editProductRouter.get("/editproduct", editProductController.editProductGet);
editProductRouter.post("/editproduct", editProductController.editProductPost);

module.exports = editProductRouter;
