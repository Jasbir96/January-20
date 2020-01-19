// gdrive
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
function downloadFile(url, downloaded) {
  // We are downloading the file here
  // before
  var path = "C:\\Downloads\\";
  console.log("Downloading file from: " + url);
  var path = "C:\\Downloads\\";
  var img = url.split("/").pop();
  var dFile = path + "\\" + img;
  // async
  setTimeout(function() {
    downloaded(dFile);
  }, 3000);
  // after
  return "Something"
  // let's assume it takes 3 seconds to download
  // accepts url of image and callback which is called when downloading is done
}
// zlib
// We are compressing: C:\Downloads\logo.png
// File compressed to: C:\Downloads\logo-resized.png
function compressFile(filePath, compressed) {
  // let's assume it takes 2 seconds to compress
  console.log("We are compressing: " + filePath);
  var path = filePath.split(".").shift();
  var ext = filePath.split(".").pop();
  var cFile = path + "-resized." + ext;

  setTimeout(function() {
    compressed(cFile);
  }, 2000);

  //accepts  image filepath and callback which is called when compressesion is done
}
// dropbox
function uploadFile(diskPath, uploaded) {
  var uploadUrl = "http://pep/uploads";
  // Uploading to: http://pep/uploads;
  // File successfully uploaded to: http://pep/uploads/logo-resized.png;

  console.log("Uploading to: " + uploadUrl);
  var img = diskPath.split("/").pop();
  var uFile = uploadUrl + "/" + img;
  setTimeout(function() {
    uploaded(uFile);
  }, 3000);

  // We will upload this file, it takes 3 seconds,
  // let's assume it takes 3 seconds to upload
  //accepts  image filepath and callback which is called when uploading is done
}

// var Dfile;
function downloaded(dFile) {
  console.log(" File saved to:" + dFile);
  // Dfile=dFile;
  compressFile(dFile, compressed);
}
downloadFile("http://google.com/logo.png", downloaded);

function compressed(cFile) {
  console.log(" File compressed to: " + cFile);
  uploadFile(cFile, uploaded);
}
function uploaded(uFile) {
  console.log(" File successfully uploaded to: " + uFile);
  console.log("Task completed");
}



// url:http://google.com/logo.png
// output:
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
//3 sec
//5sec
// We are compressing: C:\Downloads\logo.png
// File compressed to: C:\Downloads\logo-resized.png
//8sec
// Uploading to: http://pep/uploads
// File successfully uploaded to: http://pep/uploads/logo-resized.png
// Task completed
