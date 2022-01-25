const router = require("express").Router();

const courseService = require("../services/courseServices.js");

const renderCreatePage = (req, res) => {
	res.render("create-course");
};

const createCourse = async (req, res) => {
	const { title, description, imageUrl, isPublic } = req.body;
	let isPublicBulean = isPublic === "on" ? true : false;
	try {
		await courseService.create(title, description, imageUrl, isPublicBulean);
		res.redirect("/");
	} catch (error) {
		res.locals.error = error;
		res.render("create-course");
	}
};

router.get("/create", renderCreatePage);
router.post("/create", createCourse);

module.exports = router;
