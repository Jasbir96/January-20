const getRawweather = require("../utilities/getRaweather");
const getLocation = require("../utilities/getLocation");

module.exports.forecast = async function helper(location) {

    if (location == "") {
        location = await getLocation.getLocation();

    }
    if (rawWeather == "Location is not supported") {
        console.log("Location is not supported");
        return;
    }
    const rawWeather = await getRawweather.getWeather(location);

    console.log(rawWeather);

    // table format
}