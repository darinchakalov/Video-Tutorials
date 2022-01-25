const homeController = require("../controllers/homeController.js");
const authController = require("../controllers/authController.js");
const nonExistingController = require("../controllers/nonExistingController.js");
const courseController = require("../controllers/courseController.js");
const profileController = require("../controllers/profileController.js");

module.exports = (app) => {
	app.use(homeController);
	app.use(authController);
	app.use(courseController);
	app.use(profileController);
	app.use(nonExistingController);
};
