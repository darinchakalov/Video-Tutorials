const router = require("express").Router();

const courseService = require("../services/courseServices.js");

const renderProfilePage = async (req, res) => {
	try {
		let allCourses = await courseService.findEnrowed();
		let courses = allCourses.filter((c) => c.users.some((u) => u.id == res.user.id)).map((c) => c.title);
		let myCourses = courses.join(", ");
		res.render("myProfile", { myCourses });
	} catch (error) {
		req.locals.error = error;
		res.render("myProfile");
	}
};

router.get("/profile", renderProfilePage);

module.exports = router;
