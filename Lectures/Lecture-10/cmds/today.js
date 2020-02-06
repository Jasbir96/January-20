const getRawweather = require("../utilities/getRaweather");
const getLocation = require("../utilities/getLocation");
module.exports.today = async function helper(location) {
    if (location == "") {
        location = await getLocation.getLocation();
    }
    const rawWeather = await getRawweather.getWeather(location);

    console.log(rawWeather);
}
// helper();
// 1. check => location?getLocation
// 2. getRawWeather
// 3. modify  