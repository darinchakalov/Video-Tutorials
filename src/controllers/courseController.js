const router = require("express").Router();

const courseService = require("../services/courseServices.js");

const renderCreatePage = (req, res) => {
	res.render("create-course");
};

const createCourse = async (req, res) => {
	const { title, description, imageUrl, isPublic } = req.body;
	let isPublicBulean = isPublic === "on" ? true : false;
	try {
		await courseService.create(title, description, imageUrl, isPublicBulean, res.user.id);
		res.redirect("/");
	} catch (error) {
		res.locals.error = error;
		res.render("create-course");
	}
};

const renderDetailsPage = async (req, res) => {
	try {
		let courseData = await courseService.getOne(req.params.id);
		let course = courseData.toObject();
		let isCreator = course.creator == res.user.id ? true : false;
		let isEnrowed = course.users.some((x) => x._id == res.user?.id);
		res.render("details", { ...course, isCreator, isEnrowed });
	} catch (error) {
		res.locals.error = error;
		res.render("details");
	}
};

const enrowCourse = async (req, res) => {
	try {
		await courseService.enrow(req.params.id, res.user.id);
		res.redirect(`/details/${req.params.id}`);
	} catch (error) {
		res.locals.error = error;
		res.render("details");
	}
};

const deleteCourse = async (req, res) => {
	try {
		await courseService.del(req.params.id);
		res.redirect("/");
	} catch (error) {
		res.locals.error = error;
		res.render("details");
	}
};

const renderEditPage = (req, res) => {
	res.render("edit");
};

const editCourse = async (req, res) => {
	try {
	} catch (error) {
		res.locals.error = error;
		res.render("details");
	}
};

router.get("/create", renderCreatePage);
router.post("/create", createCourse);
router.get("/details/:id", renderDetailsPage);
router.get("/enrow/:id", enrowCourse);
router.get("/delete/:id", deleteCourse);

module.exports = router;
