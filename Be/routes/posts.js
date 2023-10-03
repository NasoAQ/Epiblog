const express = require("express");
const PostModel = require("../models/post");
const logger = require("../middleweares/logger");
const validatePost = require("../middleweares/validatePost");
const posts = express.Router();

posts.get("/posts", logger, async (req, res) => {
	const { page = 1, pageSize = 3 } = req.query;
	try {
		const posts = await PostModel.find()
			.limit(pageSize)
			.skip((page - 1) * pageSize);

		const totalPosts = await PostModel.count();
		res.status(200).send({
			statusCode: 200,
			currentPage: Number(page),
			totalPages: Math.ceil(totalPosts / pageSize),
			totalPosts,
			posts,
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
		});
	}
});

posts.get("/posts/byId/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const post = await PostModel.findById(id);
		if (!post) {
			return res.status(404).send({
				statusCode: 404,
				message: "Post inesistente",
			});
		}
		res.status(200).send({
			statusCode: 200,
			post,
		});
	} catch (e) {}
});

posts.post("/posts/create", validatePost, async (req, res) => {
	const newPost = new PostModel({
		category: req.body.category,
		title: req.body.title,
		cover: req.body.cover,
		readTime: {
			value: Number(req.body.readTime.value),
			unit: req.body.readTime.unit,
		},
		author: {
			name: req.body.author.name,
			avatar: req.body.author.avatar,
		},
		content: req.body.content,
	});
	try {
		const post = await newPost.save();
		res.status(201).send({
			statusCode: 201,
			message: "Post salvato correttamente",
			payload: post,
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

posts.patch("/posts/update/:postId", async (req, res) => {
	const { postId } = req.params;
	const postExist = await PostModel.findById(postId);

	if (!postExist) {
		return res.status(404).send({
			statusCode: 404,
			message: "Il post non esiste",
		});
	}

	try {
		const dataToUpdate = req.body;
		const options = { new: true };
		const result = await PostModel.findByIdAndUpdate(
			postId,
			dataToUpdate,
			options
		);

		res.status(200).send({
			statusCode: 200,
			message: "Post modificato correttamente",
			result,
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

posts.delete("/posts/delete/:postId", async (req, res) => {
	const { postId } = req.params;
	try {
		const post = await PostModel.findByIdAndDelete(postId);
		if (!post) {
			return res.status(404).send({
				statusCode: 404,
				message: "Post non esistente",
			});
		}
		res.status(200).send({
			statusCode: 200,
			message: "Post eliminato correttamente",
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

module.exports = posts;
