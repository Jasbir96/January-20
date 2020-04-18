const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const payload = "dfnvbdsmhsdfmsjh";
const secret = "sndfvhsanzvdnvc";
app.get("/tokenSigner", function (req, res) {
  const token = jwt.sign({ payload: payload }, secret)
  // cookies
  res.status(200).json({
    token,
    status: "successfull"
  })
})
// token=> payload => _id =>search => user => role
app.get("/sensitiveData", tokenVerfier, sensitiveData)

function tokenVerfier(req, res,next) {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const decryptedData = jwt.verify(token, secret);
    if (decryptedData) {
      next();
    } else {
      throw new Error("You are not logged In");
    }
  } catch (err) {
    res.status(401).json({
      err
    })
  }
}
function sensitiveData(req, res) {
  res.status(200).json({
    status: "you have accessed sensitive data"
  })
}
console.log("jmbvmjczxv");
app.listen(4000, function () {
  console.log("Server has started at port 4000");
})
// login => token create => cleiun