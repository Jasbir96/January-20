const userModel = require("../model/userModel");

async function getMe(req, res) {
  try {
    const id = req.id;
    // console.log(id);
    const user = await userModel.findById(id);
    res.status(200).json({
      data: user,
      status: "successfull"
    })
  }
  catch (err) {
    res.status(400).json({
      err
    })
  }
}

async function createUser(req, res) {
  // data
  try {
    const user = userModel.create(req.body);
    res.status(201).json({
      status: "successfull",
      data: user
    })
  } catch (err) {
    res.status(500).json({
      err
    })
  }
}
async function getAllUsers(req, res) {
  try {
    const users = await userModel.find();
    res.status(200).json({
      data: users,
      status: "successfull"
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err
    })
  }
}
module.exports.getAllUsers = getAllUsers;
// module.exports.getUser=getUser;
module.exports.createUser = createUser;
// module.exports.updateUser=updateUser;
// module.exports.removeUser=removeUser;


module.exports.getMe = getMe;
