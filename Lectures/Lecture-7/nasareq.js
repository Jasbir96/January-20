const https = require("https");
const fs = require("fs");

const writer = fs.createWriteStream("img.jpeg");
const options = {
  hostname: "api.nasa.gov",
  path: "/planetary/apod?api_key=QZpJxjE3JriPyjXocOEs1OG2kySOyqgjQH5Sxdhm",
  port: 443,
  method: "GET"
};
// const stream
const request = https.request(options, function(res) {
  let completeData = "";
  res.on("data", function(chunk) {
    completeData += chunk;
  });
  res.on("end", function() {
    let parsedData = JSON.parse(completeData);
    // console.log(parsedData["url"]);
    const imgUrl = parsedData["url"];
    const imgReq = https.request(imgUrl, function(res) {
      res.pipe(writer);
    });
    imgReq.end();
  });
});
request.end();
