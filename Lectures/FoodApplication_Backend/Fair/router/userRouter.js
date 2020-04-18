const express = require("express")
const userRouter = express.Router();
const { getAllUsers, createUser } = require("../controller/userController");
const { getMe } = require("../controller/userController");
const { signup, login, protectRoute, isAuthorized, forgetPassword, resetPassword } = require("../controller/authController");
// signup
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/profilePage", protectRoute, getMe);
userRouter.patch("/forgetPassword", forgetPassword)
userRouter.patch("/resetPassword/:tokeplan", resetPassword);
// login 
// forgetPassword
//resetPassword
// userRouter
//   .route("/:userId")
//   .patch(updateUser)
//   .delete(removeUser)
//   .get(getUser);
// admin
userRouter.use(protectRoute, isAuthorized(["admin"]));
userRouter.route("").
  get(getAllUsers)
  .post(createUser);
module.exports = userRouter;