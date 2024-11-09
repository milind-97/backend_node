/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const collections = sequelize.define(
	'collections',
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
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				notNull: { args: true, msg: 'name Is Required' },
			},
		},
		description: {
			type: DataTypes.TEXT,
		},
		// Timestamps
		created_at: Sequelize.DATE,
		updated_at: Sequelize.DATE,
	},
	{
		updatedAt: 'updated_at',
		createdAt: 'created_at',
	}
);
module.exports = collections;

const recommendation = require('./recommondations_model')
collections.belongsToMany(recommendation, {
  through: 'collection_recommendations',
  foreignKey: 'collection_id',
});
recommendation.belongsToMany(collections, {
  through: 'collection_recommendations',
  foreignKey: 'recommendation_id',
});