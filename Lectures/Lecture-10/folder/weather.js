const getRawweather = require("../utilities/getRaweather");

async function helper() {

    const rawWeather = await getRawweather.getWeather("Mumbai");
    
    console.log(rawWeather);
}