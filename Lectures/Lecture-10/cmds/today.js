const getRawweather = require("../utilities/getRaweather");
const getLocation = require("../utilities/getLocation");
module.exports.today = async function helper(location) {
    
    if (location ==undefined) {
        location = await getLocation.getLocation();
    }
    const rawWeather = await getRawweather.getWeather(location);
    if (rawWeather == "Location is not supported") {
        console.log("Location is not supported");
        return;
    }
    const todaysWeather=rawWeather[0];
    const state=todaysWeather["weather_state_name"];
    const temp=Math.floor(todaysWeather["the_temp"]);
    console.log(`current Conditions in ${location}
            ${temp}°C ${state} `);
    // current conditions in Mumbai 
    // 23*c Clear

}
// helper();
// 1. check => location?getLocation
// 2. getRawWeather
// 3. modify  