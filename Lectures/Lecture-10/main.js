// require
const help = require("./cmds/help");
const forecast = require("./cmds/forecast");
const todayFile = require("./cmds/today");
const version = require("./cmds/version");
const minimist=require("minimist");
// input
// node main.js today Mumbai
// cli => input
const input = minimist(process.argv.slice(2));
// console.log(input);
const cmd = input["_"][0];
const location = input.l||input.location;
// console.log(location);
// console.log(input);
// today Mumbai
if (cmd == "today") {
    todayFile.today(location);

} else if (cmd == "forecast") {
    forecast.forecast(location)
}
else if (cmd == "version") {
    version.version()

}
else if (cmd == "help") {
    help.help();
}
else {
    console.log("Wrong Command")
}