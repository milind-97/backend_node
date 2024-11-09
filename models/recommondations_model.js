/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const recommendations = sequelize.define(
	'recommendations',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		user_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'User Id Is Required' },
			},
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'title Is Required' },
			},
		},
		category: {
			type: DataTypes.STRING(50),
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'category Is Required' },
			},
		},
		caption: {
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
module.exports = recommendations;
