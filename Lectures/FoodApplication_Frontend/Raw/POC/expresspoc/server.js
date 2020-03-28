const express = require("express");
// data base connection
// server create
const app = express();
// file => client
app.use(express.static("Fair"));
// form data => url=> req.body
app.use(express.urlencoded({ extended: true }));
// server => 3000;
app.post("/signup", function(req, res) {
  console.log(req.body);
  

  res.end("<h1>response recieved</h1>");
});
app.listen(3000, function() {
  console.log("Server has started at port 3000");
});
