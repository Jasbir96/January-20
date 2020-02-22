// npm init -y
// npm install axios
const axios = require("axios");

async function helper() {
console.log("fvsjsdvbh")
    
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    
    console.log(response.data);
    console.log("dfgsdg bvb")
}
helper();