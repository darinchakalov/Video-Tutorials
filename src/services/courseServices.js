const Course = require("../models/Course.js");
const User = require("../models/User.js");

const create = function (title, description, imageUrl, isPublic, creator) {
	return Course.create({ title, description, imageUrl, isPublic: isPublic, creator });
};

const getAll = function () {
	return Course.find().lean();
};

const getOne = function (id) {
	return Course.findById(id);
};

const enrow = async function (courseId, userId) {
	try {
		let course = await Course.findById(courseId);
		let user = await User.findById(userId);
		course.users.push(user);
		return course.save();
	} catch (error) {
		return error;
	}
};

const del = function (courseId) {
	return Course.findByIdAndDelete(courseId);
};

const edit = function (courseId, course) {
	return Course.findByIdAndUpdate(courseId, course, { runValidators: true });
};

const findEnrowed = function (userId) {
	return Course.find().populate("users");
};

const courseService = {
	create,
	getAll,
	getOne,
	enrow,
	del,
	edit,
	findEnrowed,
};

module.exports = courseService;
