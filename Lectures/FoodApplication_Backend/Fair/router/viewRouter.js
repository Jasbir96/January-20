const express = require("express");
const viewRouter = express.Router();
const { getTestPage, getPlansListing } = require("../controller/viewController");
viewRouter.get("/plans", getPlansListing);
viewRouter.get("/test", getTestPage);

module.exports = viewRouter;
