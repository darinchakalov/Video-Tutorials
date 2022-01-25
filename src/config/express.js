const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const router = require("./routes.js");

module.exports = (app) => {
	app.use(express.urlencoded({ extended: true }));

	app.use("/static", express.static(path.resolve(__dirname, "../static")));

	app.use(cookieParser());

	router(app);
};
