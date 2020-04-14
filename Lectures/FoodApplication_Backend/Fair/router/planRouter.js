const express = require("express")
const planRouter = express.Router();
const {getAllPlans,getPlan,removePlan,createPlan,updatePlan}=require("../controller/planController")



planRouter
.route("")
.get(getAllPlans)
.post(createPlan);

planRouter
.route("/:planId")
.get(getPlan)
.patch(updatePlan)
.delete(removePlan);

module.exports = planRouter;