const express = require("express");
const viewRouter = express.Router();
const { getTestPage, getPlansListing, getLoginPage, getHomePage, getProfilePage, getForgetPasswordPage,getResetPage,getSomethingWentWrong } = require("../controller/viewController");
const { isUserLoggedIn, protectRoute, handleResetRequest } = require("../controller/authController");
// token
viewRouter.use(isUserLoggedIn)
viewRouter.get("/plans", getPlansListing);
viewRouter.get("/test", getTestPage);
viewRouter.get("/login", getLoginPage);
viewRouter.get("/", getHomePage);
viewRouter.get("/profilePage", protectRoute, getProfilePage);
viewRouter.get("/forgetPassword", getForgetPasswordPage);
viewRouter.get("/somethingWentWrong", getSomethingWentWrong);
// redirection=> function will not be middleware => req,res object are not shared
viewRouter.get("/resetPassword/:token", handleResetRequest,getResetPage)
module.exports = viewRouter;
