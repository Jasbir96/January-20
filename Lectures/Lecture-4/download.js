// gdrive => downloadFile

function downloadFile(url, downloaded) {
  // We are downloading the file here
  // http://google.com/logo.png
  console.log("Downloading file from: "+url);
  var path = "C:\\Downloads\\";
  var img=url.split("/").pop();
  var dFile=path+"\\"+img;
  setTimeout(function(){
    downloaded(dFile)
  },3000);
}
  // C:\Downloads\logo.png
  // let's assume it takes 3 seconds to download
  // accepts url of image and callback which is called when downloading is done
// Input:
// url:http://google.com/logo.png

// output:
// uncertain => when will be downloaded


// client
downloadFile("http://google.com/logo.png", function downloaded(dFile) {
  console.log("File Saved to " + dFile);
});
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
