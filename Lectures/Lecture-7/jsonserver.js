const http = require("http");
const https = require("https");
const server = http.createServer(function(req, res) {
  const url = req.url;
  const userName = url.split("/").pop();
  if (url.startsWith("/user")) {
    const request = https.request(
      "https://jsonplaceholder.typicode.com/users",
      function(response) {
        let completeData = "";
        response.on("data", function(chunks) {
          completeData += chunks;
        });
        response.on("end", function() {
          // parse
          const users = JSON.parse(completeData);
          // for loop 
          for (let i = 0; i < users.length; i++) {
            // currentName=> username
            if (users[i].username == userName) {
              res.write(JSON.stringify(users[i]));
              res.end();
            }
          }
        });
      }
    );
    request.end();
    // console.log()
    
  } else {
    res.end();
  }
});

server.listen(3000, function() {
  console.log("server is listening at port 3000");
});
