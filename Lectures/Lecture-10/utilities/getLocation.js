const axios = require("axios")
module.exports.getLocation = async function () {
    const response = await axios.get("http://ip-api.com/json/");
    return response.data["city"];
}
