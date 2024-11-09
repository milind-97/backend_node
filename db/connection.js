/* eslint-disable linebreak-style */
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'postgres',

		// logging: true,
		pool: {
			max: 20,
			min: 0,
			acquire: 800000,
			idle: 10000,
		},
	}
);

sequelize
	.authenticate()
	.then((success) => {
		console.log(
			'DB Connection has been established successfully=============================='
		);
	})
	.catch((err) => {
		console.log('There is connection in ERROR', err);
	});

module.exports = sequelize;
