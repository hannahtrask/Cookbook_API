const express = require('express');
const Author = require('../models/Author');
const router = express.Router();
const mongoose = '../db/connection.js';
const db = mongoose.connection;

// Write the route to list all authors
router.get('/', async (req, res) => {
	const authors = await Author.find({});
	res.json({ status: 200, author: authors });
});

// Write the route to get authors by firstname
router.get('/:firstName', async (req, res) => {
	const author = await Author.find({ firstName: req.params.firstName });
	res.json({ status: 200, author: author });
});

// Write the route to create an author:
router.post('/', async (req, res) => {
	const author = await Author.create(req.body);
	res.json({ status: 200, author: author });
});

// Write the route to update an author
router.put('/name/:_id', async (req, res) => {
	const author = await Author.findByIdAndUpdate(req.params._id, req.body, {
		new: true,
	});
	res.json({ status: 200, author: author });
});

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)
//this will just delete an author

module.exports = router;
