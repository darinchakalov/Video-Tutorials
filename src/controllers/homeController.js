const router = require("express").Router();

const courseServices = require("../services/courseServices.js");

const renderHomePage = async (req, res) => {
	try {
		let courses = await courseServices.getAll();
		console.log(courses);
		res.render("home", { courses });
	} catch (error) {
		res.locals.error = error;
		res.render("home");
	}
};

router.get("/", renderHomePage);

module.exports = router;
