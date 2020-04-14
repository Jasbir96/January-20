// signup
//  user create
const userModel = require("../model/userModel");

async function signup(req, res) {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json({
      status: "user signed up",
      user
    })
  } catch (err) {
    res.status(400).json({ err })
  }
}
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (user) {
      if (password == user.password) {
        res.status(200).json({
          status: "successfull",
          user
        })
      } else {
        throw new Error("user or password didn't match")
      }
    } else {
      throw new Error("user or password didn't match ");
    }
  } catch (err) {
    console.log(err);
    res.json({
      err
    })
  }
}
async function protectRoute(req, res) {

}
// login
// user verify
// protect Route 
// authorization
//forgetPassword
//resetPassword
//updatepassword

module.exports.signup = signup;
module.exports.login = login;
module.exports.protectRoute = protectRoute;