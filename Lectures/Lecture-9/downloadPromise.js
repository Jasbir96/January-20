// promise based lib
const servicePromise = require("./Lib/servicePromise");

const promise = servicePromise.downloadPromise("http://g-drive.com/img.jpeg");
promise
.then(function (data) { console.log("Img downloaded to " + data) }
)