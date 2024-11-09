/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const collection_recommendations = sequelize.define(
	'collection_recommendations',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		collection_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'collection_id Id Is Required' },
			},
		},
		recommendation_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'recommendation_id Is Required' },
			},
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
module.exports = collection_recommendations;
