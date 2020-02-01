const randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
// promise based lib
function promisemaker() {
    console.log(" I am a sync code ")

    return new Promise(function (resolve, reject) {
        // async code 
        setTimeout(function () {
            resolve("value returned from a promise");
            // reject("There is some error")

        }, 4000)
    })
}

// console.log("Before code");
// async function helper(){
//     console.log(" Sync code ")

// const ans=await promisemaker();
// console.log(ans);
// }
// helper();
// console.log("After code");