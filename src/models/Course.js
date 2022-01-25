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
	created_at: { type: Date },
	users: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
