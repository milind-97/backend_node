/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const express = require('express');
const collection = require('../controllers/collections');

const router = express.Router();

router.route('/').post(collection.create_collection);
//
router
	.route('/:collectionId/recommendations')
	.post(collection.add_recommandation_collection);

router
	.route('/:collectionId/recommendations/:recommendationId')
	.delete(collection.remove_recommandation_collection);
module.exports = router;
