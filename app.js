//app.js
const greeting = require('./src/greeting');
const express = require("express");
const app = express();
const app = require("./src/api");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});
//console.log(greeting('Totoro'));