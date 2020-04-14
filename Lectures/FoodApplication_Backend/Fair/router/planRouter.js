const express = require("express")
const planRouter = express.Router();
const {getAllPlans,getPlan,removePlan,createPlan,updatePlan}=require("../controller/planController")
const {protectRoute}=require("../controller/authController")


planRouter
.route("")
.get(getAllPlans)
.post(protectRoute,createPlan);

planRouter
.route("/:planId")
.get(getPlan)
.patch(updatePlan)
.delete(removePlan);

module.exports = planRouter;