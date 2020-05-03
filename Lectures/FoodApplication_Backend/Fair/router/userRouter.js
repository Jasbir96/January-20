const express = require("express")
const userRouter = express.Router();
const { getAllUsers, createUser, updateProfileHandler } = require("../controller/userController");
const { getMe } = require("../controller/userController");
const { signup, login, protectRoute, isAuthorized, forgetPassword, resetPassword, logout, } = require("../controller/authController");
const multer = require("multer");
const multerstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/users");
  },
  filename: function (req, file, cb) {
    cb(null, `user-${Date.now()}.jpeg`)
  }
})
// file => type
const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true)
  } else {
    cb(new Error("Not an image! Please upload one"), false)
  }
}
const upload = multer({
  storage: multerstorage,
  fileFilter: fileFilter
});
//  file save => name , buffer => extension, 
//  destination ,fileName
//  request => loggedin=> id => user => profileImage link update 
userRouter.patch("/updateProfile" , protectRoute,upload.single("user"),updateProfileHandler)
// signup
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/profilePage", protectRoute, getMe);
userRouter.patch("/forgetPassword", forgetPassword)
userRouter.patch("/resetPassword/:token", resetPassword);
userRouter.get("/logout", logout);
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