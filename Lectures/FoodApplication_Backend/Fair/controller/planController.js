const planModel = require("../model/planModel");

async function getAllPlans(req, res) {
  try {
    const plans = await planModel.find();
    res.status(200).json({
      status: "successfull",
      plans
    })
  } catch (err) {
    res.status(200).json({
      err
    })
  }

}

async function createPlan(req, res) {
  // data
  try {
    const plan = await planModel.create(req.body);
    res.status(201).json({ status: "New Plan Created", plan });
  }
  catch (err) {

    res.status(400).json({ err });
  }
}
async function getPlan(req, res) {
  try {


    const { planId } = req.params;
    const plan = await planModel.findById(planId);
    res.status(200).json({
      status: `result for ${planId}`,
      plan,
    });
  } catch (err) {
    res.json({
      err
    })
  }
}

async function updatePlan(req, res) {
  try {
    const planId = req.params.planId;
    const tobeUpdatedData = req.body;
    const oldPlan = await planModel.findById(planId);
    const keys = Object.keys(tobeUpdatedData);
    for (key in keys) {
      oldPlan[key] = tobeUpdatedData[key];
    }
    await oldPlan.save();
    res.status(200).json({
      status: "PlanUpdated"
    });
  } catch (err) {

  }


}

async function removePlan(req, res) {
  try {
    const { planId } = req.params;
    const deletedPlan = await planModel.findByIdAndDelete(planId);
    res.json({
      data: deletedPlan,
      status: "successfull"
    })
  } catch (err) {
    res.status(400).json({ err })
  }

}

module.exports.getAllPlans = getAllPlans;
module.exports.getPlan = getPlan;
module.exports.createPlan = createPlan;
module.exports.updatePlan = updatePlan;
module.exports.removePlan = removePlan;