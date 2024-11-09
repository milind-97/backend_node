/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const users = sequelize.define(
	'users',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		fname: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'fname Is Required' },
			},
		},
		sname: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'sname Is Required' },
			},
		},
		profile_picture: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'sname Is Required' },
			},
		},
		bio: {
			type: DataTypes.TEXT,
		},
		// Timestamps
		created_at: Sequelize.DATE,
		updated_at: Sequelize.DATE,
	},
	{
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
);
module.exports = users;

const collection_model = require('./collection_model');
users.hasMany(collection_model, { foreignKey: 'user_id' });
collection_model.belongsTo(users, { foreignKey: 'user_id' });
