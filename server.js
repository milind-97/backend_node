const express = require('express');
const cors = require('cors');
const db = require('./db/connection');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.use(cors());
app.use(express.json());
// parse request of cookies
app.use(cookieParser());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
	express.urlencoded({
		extended: true,
	})
);

// simple route
app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!!!!!!!!!!!',
	});
});

const collections = require('./routes/collections');
const users = require('./routes/users');
// setInterval(Cron, 60000);
app.use('/api/collections', collections);
app.use('/api/users', users);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
