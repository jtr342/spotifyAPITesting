const fetch = require("node-fetch");
const url = "https://api.spotify.com/v1/albums/{6Lq1lrCfkpxKa4jCo5gKWr}";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
