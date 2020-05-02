const express = require("express");
const app = express();
const multer = require("multer");
const sharp = require("sharp");
const multerstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/raw");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.jpeg`)
  }
})
// file => type
const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true)
  } else {
    cb(new Error("Not an image! Please upload one"), false)
  }
}
const upload = multer({
  storage: multerstorage,
  fileFilter: fileFilter
});

//  file save => name , buffer => extension, 
//  destination ,fileName
app.post("/acceptFile", upload.single("photo"), async function (req, res) {
  console.log(req.file);
  await sharp(req.file.path).toFormat("jpeg").jpeg(
    { quality: 60 }
  ).toFile(`public/final/${Date.now()}.jpeg`);
  res.status(200).json({
    status: "file uploaded"
  })
})
app.listen(3000, function () {
  console.log("Server is listening at port 3000");
})
// pdf => pdf => mime type => filter pdf files allow