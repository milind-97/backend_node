const collection_model = require('../models/collection_model');
const recommendation_model = require('../models/recommondations_model');
const collection_recommendations_model = require('../models/collection_recommendations');
const user_model = require('../models/user_model');
exports.create_collection = async (req, res) => {
	const { user_id, name, description } = req.body;
	try {
		const newCollection = await collection_model.create({
			user_id,
			name,
			description,
		});
		return res.status(200).json({
			status: true,
			message: 'Collection Added Successfully',
		});
	} catch (err) {
		console.log('==========', err, '========');
		// check if error from dabase validation
		if (err.name === 'SequelizeValidationError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else if (err.name === 'SequelizeUniqueConstraintError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else {
			console.log(err);
			return res.status(200).json({
				status: false,
				message: 'Something went wrong try after some time',
				err: err.message,
			});
		}
	}
};

exports.add_recommandation_collection = async (req, res) => {
	const { collectionId } = req.params;
	const { recommendation_id, user_id } = req.body;
	if (!recommendation_id) {
		return res.status(200).json({
			status: false,
			message: 'recommendation id is required',
		});
	}
	try {
		const recommendation = await recommendation_model.findOne({
			where: {
				id: recommendation_id,
				user_id: user_id,
			},
		});
		if (!recommendation) {
			return res.status(200).json({
				status: false,
				message: 'Recommendation does not belong to user',
			});
		}

		const result = await collection_recommendations_model.create({
			collection_id: collectionId,
			recommendation_id: recommendation_id,
		});

		return res.status(200).json({
			status: true,
			message: 'Collection recommendation Added Successfully',
			result,
		});
	} catch (err) {
		console.log('==========', err, '========');
		// check if error from dabase validation
		if (err.name === 'SequelizeValidationError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else if (err.name === 'SequelizeUniqueConstraintError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else {
			console.log(err);
			return res.status(200).json({
				status: false,
				message: 'Something went wrong try after some time',
				err: err.message,
			});
		}
	}
};

exports.remove_recommandation_collection = async (req, res) => {
	const { collectionId, recommendationId } = req.params;
	if (!collectionId || recommendationId) {
		return res.status(200).json({
			status: false,
			message: 'collectionId and recommendationId are required',
		});
	}
	try {
		const result = await collection_recommendations_model.destroy({
			collection_id: collectionId,
			recommendation_id: recommendationId,
		});

		return res.status(200).json({
			status: true,
			message: 'Recommendation removed from collection',
		});
	} catch (err) {
		console.log('==========', err, '========');
		// check if error from dabase validation
		if (err.name === 'SequelizeValidationError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else if (err.name === 'SequelizeUniqueConstraintError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else {
			console.log(err);
			return res.status(200).json({
				status: false,
				message: 'Something went wrong try after some time',
				err: err.message,
			});
		}
	}
};

exports.view_recommandation_collection = async (req, res) => {
	const { userId } = req.params;
	const order_by = req.query.order_by || 'id';
	const sort_order = req.query.sort_order || 'DESC';
	const page = req.query.page || 1;
	const limit = req.query.limit || 10;
	const offset = (page - 1) * limit;
	try {
		const user = await user_model.findOne({
			where: {
				id: userId,
			},
		});
		if (!user) {
			return res
				.status(200)
				.json({ status: false, message: 'User not found' });
		}
		const collections = await collection_model.findAndCountAll({
			where: { user_id: userId },
			include: [
				{
					model: Recommendation,
					through: { attributes: [] },
					attributes: [
						'id',
						'title',
						'caption',
						'category',
						'created_at',
					],
				},
			],
			attributes: ['id', 'name', 'description'],
			order: [[order_by, sort_order]],
			offset,
			limit,
		});
		if (collections.count <= 0) {
			return res.status(200).json({
				status: false,
				message: 'records not found',
			});
		}
		return res.status(200).json({
			status: true,
			collections,
		});
	} catch (err) {
		console.log('==========', err, '========');

		console.log(err);
		return res.status(200).json({
			status: false,
			message: 'Something went wrong try after some time',
			err: err.message,
		});
	}
};

exports.delete_colletion = async (req, res) => {
	const { collectionId } = req.params;

	try {
		const result = await collection_model.destroy({
			id: collectionId,
		});

		return res.status(200).json({
			status: true,
			message: 'collection removed',
		});
	} catch (err) {
		console.log('==========', err, '========');
		// check if error from dabase validation
		if (err.name === 'SequelizeValidationError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else if (err.name === 'SequelizeUniqueConstraintError') {
			return res.status(200).json({
				status: false,
				message: err.errors[0].message,
			});
		} else {
			console.log(err);
			return res.status(200).json({
				status: false,
				message: 'Something went wrong try after some time',
				err: err.message,
			});
		}
	}
};
