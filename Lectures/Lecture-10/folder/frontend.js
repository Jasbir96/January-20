async function makeRequest() {
    const response = axios.get("/users");
    console.log(response);
}