const http = require("http");

// const fs = require("fs");
// const fs = fs.readFileSync("index.html");
// server
const server = http.createServer(function(req, res) {
  // response
  console.log(req.url);
// routing
  if (req.url.split("/").pop() == "bret") {
    res.write("Yes bret is our user");
  } else {
    res.write("<h1>404 Page Not found</h1>");
  }

  // res.write("Response from Node server");
  res.end();
});

server.listen(3000, function() {
  console.log("Server is listening at port 3000");
});
