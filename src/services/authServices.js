const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

const register = function (username, password) {
	return User.create({ username, password });
};

const login = async function (username, password) {
	try {
		let user = await User.findOne({ username: username });
		let isPasswordCorrect = await user.confirmPassword(password);
		return user;
	} catch (error) {
		throw new Error("Username or password are incorrect", error);
	}
};

const userExists = function (username) {
	return User.exists({ username });
};

const createToken = function (user) {
    jwt.sign()
};

const authServices = {
	register,
	login,
	userExists,
};

module.exports = authServices;
