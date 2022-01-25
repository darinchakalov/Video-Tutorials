const Course = require("../models/Course.js");

const create = function (title, description, imageUrl, isPublic) {
	return Course.create({ title, description, imageUrl, isPublic: isPublic });
};

const getAll = function () {
	return Course.find().lean();
};

const courseService = {
	create,
	getAll,
};

module.exports = courseService;
