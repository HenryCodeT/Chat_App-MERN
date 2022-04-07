// //// FIELDS ///////////////////
console.log('**************** 1-server ********************');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

// using cors permitions
app.use(cors());
// midle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This will fire our mongoose.connect statement to initialize our database connection
require('./config/config.mongoose');
// This is where we import the person routes function from our person.routes.js file
const AllMyPersonRoutes = require('./routes/routes');

AllMyPersonRoutes(app);

console.log('---------------- 1-server --------------------');
const server = app.listen(port, () =>
	console.log(`Chat app on port ${server.address().port}!`)
);
