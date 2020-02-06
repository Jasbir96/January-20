const axios = require("axios");
module.exports.getWeather = async function (location) {
    // 1. get id
    const response = await axios.get("https://www.metaweather.com/api/location/search/?query=" + location)
    // console.log(response.data);
    const woeid = response.data[0].woeid;
    // 2. Get Raw weather
    const rawWeather = await axios.get(`https://www.metaweather.com/api/location/${woeid}`)
    // 3. get required data from response and print it to console
    return rawWeather.data["consolidated_weather"];

}

