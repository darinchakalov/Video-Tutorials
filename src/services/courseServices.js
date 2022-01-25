const Course = require("../models/Course.js");

const create = function (title, description, imageUrl, isPublic) {
	return Course.create({ title, description, imageUrl, isPublic: isPublic });
};

const courseService = {
	create,
};

module.exports = courseService;
