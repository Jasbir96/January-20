const express = require("express")
const planRouter = express.Router();
const { getAllPlans, getPlan, removePlan, createPlan, updatePlan } = require("../controller/planController")
const { protectRoute, isAuthorized } = require("../controller/authController")
planRouter
  .route("")
  .get(getAllPlans)
  .post(protectRoute, isAuthorized(["admin", "resturant owner"]), createPlan);
planRouter
  .route("/:planId")
  .get(getPlan)
  .patch(updatePlan)
  // admin
  .delete(protectRoute, isAuthorized(["admin"]),
    removePlan);

module.exports = planRouter;

// server => route ,get,post 
// server => request => getplan