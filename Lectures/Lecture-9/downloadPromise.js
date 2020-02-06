// promise based lib
const servicePromise = require("./Lib/servicePromise");

async function helper() {
    const dFile = await servicePromise.downloadPromise("http://g-drive.com/img.jpeg");
    console.log(dFile);
    const cFile=await servicePromise.compressPromise(dFile);
    console.log(cFile);
    const uFile=await servicePromise.uploadPromise(cFile);
console.log(uFile);
console.log("task completed");
}
helper();