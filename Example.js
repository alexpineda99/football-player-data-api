const fetch = require("node-fetch");

fetch("https://ultimate-football-data-api.p.rapidapi.com/ufd/21/players", {
  headers: {
    "x-rapidapi-key": "YOUR_API_KEY",
    "x-rapidapi-host": "ultimate-football-data-api.p.rapidapi.com"
  }
})
.then(res => res.json())
.then(data => console.log(data));
