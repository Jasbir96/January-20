const express = require("express")
const userRouter = express.Router();
const {getUser,getAllUsers,updateUser,removeUser,createUser}=require("../controller/userController")

userRouter.route("").
get(getAllUsers)
.post(createUser);

userRouter
.route("/:userId")
.patch(updateUser)
.delete(removeUser)
.get(getUser);
module.exports=userRouter;