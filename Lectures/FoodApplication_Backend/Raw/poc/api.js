const express = require("express");
const app = express();

const plans = require("./data/plan.json");
const fs = require("fs");

// http routes
// plans
// json parse => req.body
// json=> http message body
// 1.
app.use(express.json());
//userdefined middleware
// 2.

//3.
app.param("planId", function (req, res, next, planId) {
  if (planId <= 0 || planId > plans.length) {
    return res.status(404).json({
      status: "Invalid Id",
    });
  }
  next();
});

app.use(function logger(req, res, next) {
  console.log("Req url: " + req.url);
  console.log(req.body);
  next();
});
app.get("/api/plans", function (req, res) {
  res.status(200).json({
    status: "Request Recieved",
  });
});
// 3.
// creation => post
app.post("/api/plans", function createPlan(req, res) {
  // data
  let plan = req.body;
  plan.id = plans.length + 1;
  // ram
  plans.push(plan);
  // file system save
  fs.writeFileSync("./data/plan.json", JSON.stringify(plans));

  res.status(201).json({ status: "New Plan Created" });
});

app.get("/api/plans/:planId", function getPlan(req, res) {
  // console.log(req.params);
  console.log(req.body);
  let planId = req.params.planId;
  const plan = plans[planId - 1];

  res.status(200).json({
    status: `result for ${planId}`,
    plan,
  });
});
// //4.self
app.patch("/api/plans/:planId", function updatePlan(req, res) {
  const planId = req.params.planId;
  const tobeUpdatedData=req.body;
  
  res.status(200).json({
    status: "PlanUpdated",
  });
});
// wildcard
app.use("*", function (req, res) {
  return res.status(404).json({
    status: "Resource not found",
  });
});

app.listen(3000, function () {
  console.log("Server is listening at port 3000");
});
