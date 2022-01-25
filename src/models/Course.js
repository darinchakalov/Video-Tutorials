const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	isPublic: {
		type: Boolean,
		default: false,
	},
	timestamps: { createdAt: "created_at", required: true },
	users: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
});
