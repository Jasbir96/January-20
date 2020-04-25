// signup
//  user create
const userModel = require("../model/userModel");
const Email = require("../utility/email");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../configs/config");
async function signup(req, res) {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json({
      status: "user signed up",
      user
    })
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    // console.log(user);
    if (user) {
      if (password == user.password) {
        // jwt
        const { _id } = user;
        const token = jwt.sign({ id: _id }, JWT_SECRET, {
          expiresIn: Date.now() + 1000 * 60 * 30
        })
        res.status(200).json({
          status: "successfull",
          user,
          token
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
      err: err.message
    })
  }
}
// authenticate => user
async function protectRoute(req, res, next) {
  try {
    // headers 
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.split(" ").pop();
      // console.log(token)

      if (token) {
        const decryptedData = jwt.verify(token, JWT_SECRET);
        if (decryptedData) {
          const id = decryptedData.id;
          console.log(id);
          // console.log(decryptedData)
          req.id = id;
          next();
        } else {
          throw new Error("Invalid Token");
        }
      } else {
        throw new Error("Please login again to access this route ");
      }
    } else {
      throw new Error("Please provide a token");
    }

  } catch (err) {
    // console.log(err);
    res.status(400).json({
      status: "unsuccessfull",
      err: err.message
    })
  }
}
// authorization
async function isAdmin(req, res, next) {
  try {
    const user = await userModel.findById(req.id);
    if (user) {
      if (user.role == "admin") {
        next()
      } else {
        throw new Error("User not authorized");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

function isAuthorized(roles) {
  return async function (req, res, next) {
    try {

      const { id } = req;
      const user = await userModel.findById(id);
      console.log(user);
      const { role } = user;
      if (roles.includes(role) == true) {
        next()
      } else {
        throw new Error("You are not authorized ");
      }
    } catch (err) {
      console.log(err);
      res.status(403).json(
        { err: err.message }
      )
    }
  };
}

async function forgetPassword(req, res) {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email: email });
    // const user = users[0];
    if (user) {
      // console.log(user);
      const token = user.createToken();
      // db => save
      // db => integrity ,consistency
      await user.save({ validateBeforeSave: false });
      // email 
      const resetPasswordLink = `http://localhost:3000/api/users/resetPassword/${token}`
      const emailOptions = {};
      emailOptions.html = `<h1>Please click on the link to reset your password </h1>
      <p>${resetPasswordLink}</p>
      `;
      emailOptions.to = email;
      emailOptions.from = "customersupport@everyone.com";
      emailOptions.subject = "Reset Password Link"
      await Email(emailOptions);
      res.status(200).json({
        resetPasswordLink,
        status: `Email send to ${email}`
      })
    } else {
      throw new Error("You does not exist");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message
    })
  }
}
async function resetPassword(req, res) {
  try {
    const token = req.params.token;
    const user = await userModel.findOne({ resetToken: token });
    if (user) {
      if (Date.now() < user.expiresIn) {
        const { password, confirmPassword } = req.body;
        user.resetPasswordhelper(password, confirmPassword);
        await user.save();
        res.status(200).json({
          success: "user password updated login with new password"
        })
      } else {
        throw new Error("token has expired");
      }
    } else {
      throw new Error("user not found");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message
    })
  }
  // resetPassword/svmbamvbd
  // db => svmbamvbd=> user search => user
  // user => password
}
module.exports.signup = signup;
module.exports.login = login;
module.exports.protectRoute = protectRoute;
module.exports.isAdmin = isAdmin;
module.exports.isAuthorized = isAuthorized;
module.exports.forgetPassword = forgetPassword;
module.exports.resetPassword = resetPassword;



// login
// user verify
// protect Route 
// authorization

//forgetPassword
//resetPassword
//updatepassword

