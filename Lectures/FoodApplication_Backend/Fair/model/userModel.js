const mongoose = require("mongoose");
// mongodb cloud db 
mongoose.connect("mongodb+srv://admin:1234abc@cluster0-ufy4c.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(function (conn) {
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
    select:false
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
  }
})

userSchema.pre("save", function () {
  this.confirmPassword = undefined;
})
const userModel = mongoose.model("janUserModel", userSchema);
module.exports = userModel;