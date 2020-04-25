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
    plans: plans
  })
}
async function getLoginPage(req, res) {
  res.render("login.pug", {
    title: "Login Page"
  })
}
async function getHomePage(req,res){
  res.render("Home.pug",{title:"Home Page"})
}
module.exports.getTestPage = getTestPage;
module.exports.getPlansListing = getPlansListing;
module.exports.getLoginPage=getLoginPage;
module.exports.getHomePage=getHomePage;