var ajax = require("./Lib/filedownload");
//***************************************
var storage = {};
function getFile(file) {
    return new Promise(function (resolve, reject) {
        ajax.fakeAjax(file, function (data) {
            console.log("Incoming File " + file + " " + data);
            // printInOrder(file, data);
            resolve(data);
            // what do we do here?
        });
    })

}

var files = ["file1", "file2", "file3"];

// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order

async function helper() {
    // time t=0
    // time t=5
    // 5
    const f1Promise = getFile("file1");
    // 4
    const f2Promise = getFile("file2");
    //6
    const f3Promise = getFile("file3");
    const f1data = await f1Promise;
    console.log(f1data);
    const f2data=await f2Promise;
    console.log(f2data);
    const f3data=await f3Promise;
    console.log(f3data)

}
helper();
//output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// // The first  file's data
// // The second file's data
// // The third file's data
// Complete
