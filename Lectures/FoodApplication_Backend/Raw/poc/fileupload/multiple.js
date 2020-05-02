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
let multipleFileMW = upload.fields([{ name: "Cover", maxCount: 1 }, {
  name: "Normal", maxCount: 3
}])
app.post("/acceptFile", multipleFileMW, async function (req, res) {
  // console.log(req.files);
  await sharp(req.files.Cover[0].path).toFormat("jpeg").jpeg(
    { quality: 60 }
  ).toFile(`public/final/${Date.now()}.jpeg`)
  let waitingArr = []

  for (let i = 0; i < req.files.Normal.length; i++) {
    let imageToBeprocessed = sharp(req.files.Normal[i].path).toFormat("jpeg").jpeg(
      { quality: 60 }
    ).toFile(`public/final/${Date.now()}.jpeg`);
    waitingArr.push(imageToBeprocessed);
  }
  // work complete 
  await Promise.all(waitingArr);

  res.status(200).json({
    status: "file uploaded"
  })
})
app.listen(3000, function () {
  console.log("Server is listening at port 3000");
})
// pdf => pdf => mime type => filter pdf files allow