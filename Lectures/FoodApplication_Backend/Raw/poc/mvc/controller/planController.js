const fs=require("fs");
const plans=require("../model/plan.json");
function getAllPlans(req, res) {
  res.status(200).json({
    status: "successfull",
    plans
  })
}
function createPlan(req, res) {
  // data
  let plan = req.body;
  plan.id = plans.length + 1;
  // ram
  plans.push(plan);
  // file system save
  fs.writeFileSync("./data/plan.json", JSON.stringify(plans));

  res.status(201).json({ status: "New Plan Created" });
}
function getPlan(req, res) {
  // console.log(req.params);
  console.log(req.body);
  let planId = req.params.planId;
  const plan = plans[planId - 1];

  res.status(200).json({
    status: `result for ${planId}`,
    plan,
  });
}

function updatePlan(req, res) {
  const planId = req.params.planId;
  const tobeUpdatedData = req.body;

  res.status(200).json({
    status: "PlanUpdated",
  });
}

function removePlan(req, res) {
  res.json({
    data: "plan deleted",
    status: "successfull"
  })
}

module.exports.getAllPlans=getAllPlans;
module.exports.getPlan=getPlan;
module.exports.createPlan=createPlan;
module.exports.updatePlan=updatePlan;
module.exports.removePlan=removePlan;