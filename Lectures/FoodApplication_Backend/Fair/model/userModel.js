const mongoose = require("mongoose");
const config = require("../configs/config");
const crypto = require("crypto");
// mongodb cloud db 
mongoose.connect(config.DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(function (conn) {
  // console.log("Connection to mongodb established");
  // console.log(conn)
  console.log("User Db connected");
}).catch(function (err) {
  console.log(err);
})
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  }, email: {
    type: String,
    required: [true, "email is required"],
    unique: true
  }, password: {
    type: String,
    minlength: 7,
    required: [true, "password is required"],
    select: false
  }, confirmPassword: {
    type: String,
    required: [true, "confirmPassword is required"],
    minlength: 7,
    validate: {
      validator: function () {
        return this.password == this.confirmPassword
      },
      message: "Password and confirm password should be same"
    }
  }, role: {
    type: String,
    enum: ["admin", "restaurant owner", "Delivery Boy", "user"],
    default: "user"
  },
  resetToken: String,
  expiresIn: String,
  // 1. 
  profileImage: {
    type: String,
    default: "/img/users/default.jpeg"
  }
})

userSchema.pre("save", function () {
  this.confirmPassword = undefined;
})
userSchema.methods.createToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  // user
  this.resetToken = token
  this.expiresIn = Date.now() + 10 * 1000 * 60;
  // 
  return token;
}
userSchema.methods.resetPasswordhelper = function (password, confirmPassword) {
  this.password = password;
  this.confirmPassword = confirmPassword;
  this.resetToken = undefined;
  this.expiresIn = undefined;
}
const userModel = mongoose.model("janUserModel", userSchema);
module.exports = userModel;