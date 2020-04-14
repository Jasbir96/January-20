const fs=require("fs");
const users=require("../model/user.json");

function getAllUsers(req, res) {
  res.status(200).json({
    status: "successfull",
    users
  })
}
function createUser(req, res) {
  // data
  let user = req.body;
  user.id = users.length + 1;
  // ram
  users.push(plan);
  // file system save
  fs.writeFileSync("./data/user.json", JSON.stringify(users));

  res.status(201).json({ status: "New Plan Created" });
}
function getUser(req, res) {
  // console.log(req.params);
  console.log(req.body);
  let userId = req.params.userId;
  const user = users[userId - 1];

  res.status(200).json({
    status: `result for ${userId}`,
    user,
  });
}
function updateUser(req, res) {
  const userId = req.params.userId;
  // console.log(userId);
  const user= users[userId-1];

  const tobeUpdatedData = req.body;
  console.log(tobeUpdatedData)
// const keysArr=[];
for(let  key in tobeUpdatedData){
keysArr.push(key);
}
const keysArr=Object.keys(tobeUpdatedData);
// console.log(keysArr);
for(let i=0;i<keysArr.length;i++){
  user[keysArr[i]]=tobeUpdatedData[keysArr[i]]
}
// console.log(user);
fs.writeFileSync("E:\\January-20\\Lectures\\FoodApplication_Backend\\Raw\\poc\\model\\user.json",JSON.stringify(users));

  res.status(200).json({
    status: "userUpdated",
    users
  });
}
function removeUser(req, res) {
  res.json({
    data: "user deleted",
    status: "successfull"
  })
}

module.exports.getAllUsers=getAllUsers;
module.exports.getUser=getUser;
module.exports.createUser=createUser;
module.exports.updateUser=updateUser;
module.exports.removeUser=removeUser;
