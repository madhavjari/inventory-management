const { Router } = require("express");
const indexController = require("../controller/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getCosmeticList);

module.exports = indexRouter;
