/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const express = require('express');
const collection = require('../controllers/collections');

const router = express.Router();

router
	.route('/:userId/collections')
	.get(collection.view_recommandation_collection);

module.exports = router;
