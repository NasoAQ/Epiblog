const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: false,
			default: "General",
		},
		title: {
			type: String,
			required: true,
		},
		cover: {
			type: String,
			required: false,
			default:
				"https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/21015/image/picture.png",
		},
		readTime: {
			value: {
				type: Number,
				required: true,
			},
			unit: {
				type: String,
				required: true,
				enum: ["views", "hours", "quarti"],
			},
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Author",
			/* name: {
				type: String,
				required: true,
			},
			avatar: {
				type: String,
				required: false,
				default:
					"https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=",
			},
		}, */
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, strict: true }
);

module.exports = mongoose.model("postModel", PostSchema, "posts");
