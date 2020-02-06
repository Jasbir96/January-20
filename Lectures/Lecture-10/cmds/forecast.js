const getRawweather = require("../utilities/getRaweather");
const getLocation = require("../utilities/getLocation");

module.exports.forecast = async function helper(location) {

    if (location == "") {
        location = await getLocation.getLocation();

    }
    const rawWeather = await getRawweather.getWeather(location);

    console.log(rawWeather);

    // 
}