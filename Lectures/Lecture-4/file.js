var ajax = require("./lib/filedownload");
//***************************************
var storage = {};
function getFile(file) {
  ajax.fakeAjax(file, function(data) {
    console.log("Incoming File " + file + " " + data);
    printInOrder(file, data);

    // what do we do here?
  });
}
var files = ["file1", "file2", "file3"];
function printInOrder(file, data) {
  // store in storage
  storage[file] = data;
  //check order
  for (var i = 0; i < files.length; i++) {
    // file exist
    if (storage[files[i]] == undefined) {
      return;
    } else {
      if (storage[files[i]] != true) {
        // print
        console.log(files[i] + " " + storage[files[i]]);
        storage[files[i]] = true;
        // mark true
      }
      // printed /not
    }
  }
}
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
getFile("file1");
getFile("file2");
getFile("file3");
//output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// // The first  file's data
// // The second file's data
// // The third file's data
// Complete
