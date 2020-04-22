// 1
let planModel = require("../model/planModel");
function getTestPage(req, res) {
  res.render("test.pug", {
    title: "Test Page"
  })
}
async function getPlansListing(req, res) {
  // 2
  const plans = await planModel.find();
  res.render("plansListing.pug", {
    title: "Plans page",
    // 3
    plans:plans
  })
}
module.exports.getTestPage = getTestPage;
module.exports.getPlansListing = getPlansListing;