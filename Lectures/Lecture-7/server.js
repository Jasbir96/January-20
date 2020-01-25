const http = require("http");
const server = http.createServer(function(req, res) {
  console.log(req.url);
  
  // write => data event is called
  // 1 routing;
  if (req.url == "/") {
    res.write("<h1>Home Page</h1>");
  } else if (req.url == "/contact") {
    res.write("<h1>Contacts Page</h1>");
  } else if (req.url == "/product") {
    res.write("<h1>Product page</h1>");
  } else {
    res.write("<h1>404 Page Not Found</h1>");
  }
  res.end();
  // res.write("another response from node server");
  2;
  // write => data event is called
  // end => data client side
});
server.listen(3000, function() {
  console.log("Server is listening at port 3000");
});
