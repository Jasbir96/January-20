const fs = require("fs");
const reader = fs.createReadStream("index.html");
const writer = fs.createWriteStream("index1.html");
reader.pipe(writer);
