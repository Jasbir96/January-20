const express = require("express");
const viewRouter = express.Router();
const { getTestPage, getPlansListing,getLoginPage,getHomePage } = require("../controller/viewController");
viewRouter.get("/plans", getPlansListing);
viewRouter.get("/test", getTestPage);
viewRouter.get("/login", getLoginPage);
viewRouter.get("/",getHomePage);
module.exports = viewRouter;
