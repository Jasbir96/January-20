// 1
let planModel = require("../model/planModel");
function getTestPage(req, res) {
  res.render("test.pug", {
    title: "Test Page"
  })
}
async function getPlansListing(req, res) {
  // 2
  const user = req.user;
  cons
  const plans = await planModel.find();
  res.render("plansListing.pug", {
    title: "Plans page",
    // 3
    plans: plans,
    user
  })
}
async function getLoginPage(req, res) {
  const user = req.user;
  console.log(req.user);
  res.render("login.pug", {
    title: "Login Page",
    user
  })
}
async function getHomePage(req, res) {
  const user = req.user;
  res.render("Home.pug", {
    title: "Home Page",
    user
  })
}
async function getProfilePage(req, res) {
  const user = req.user;
  res.render("profilePage.pug", {
    title: "Profile Page",
    user
  })
}
async function getForgetPasswordPage(req, res) {
  res.render("forgetPassword.pug", {
    title: "ForgetPassword",
  })
}
async function getResetPage(req, res) {
  const { token } = req;
  res.render("resetPassword", { token });

}
async function getSomethingWentWrong(req, res) {
  res.render("somethingWentWrong");
}
module.exports.getTestPage = getTestPage;
module.exports.getPlansListing = getPlansListing;
module.exports.getLoginPage = getLoginPage;
module.exports.getHomePage = getHomePage;
module.exports.getProfilePage = getProfilePage;
module.exports.getForgetPasswordPage = getForgetPasswordPage;
module.exports.getResetPage = getResetPage;
module.exports.getSomethingWentWrong = getSomethingWentWrong;