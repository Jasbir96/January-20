const express = require("express");
const viewRouter = express.Router();
const { getTestPage, getPlansListing, getLoginPage, getHomePage, getProfilePage ,getForgetPasswordPage} = require("../controller/viewController");
const { isUserLoggedIn, protectRoute } = require("../controller/authController");
// token
viewRouter.use(isUserLoggedIn)
viewRouter.get("/plans", getPlansListing);
viewRouter.get("/test", getTestPage);
viewRouter.get("/login", getLoginPage);
viewRouter.get("/", getHomePage);
viewRouter.get("/profilePage", protectRoute, getProfilePage);
viewRouter.get("/forgetPassword",getForgetPasswordPage);
module.exports = viewRouter;
