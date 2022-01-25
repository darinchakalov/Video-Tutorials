const router = require("express").Router();

const authServices = require("../services/authServices.js");

const renderLoginPage = (req, res) => {
	res.render("login");
};

const loginUser = async (req, res) => {
	const { username, password } = req.body;
	try {
		await authServices.login(username, password);
		console.log("succesful login...");
		res.redirect("/");
	} catch (error) {
		res.locals.error = error;
		return res.render("login");
	}
};

const renderRegisterPage = (req, res) => {
	res.render("register");
};

const registerUser = async (req, res) => {
	let { username, password, repeatPassword } = req.body;
	if (password !== repeatPassword) {
		res.locals.error = "Passwords do not match!";
		return res.render("register");
	}
	if (await authServices.userExists(username)) {
		res.locals.error = "Username already exists!";
		return res.render("register");
	}
	try {
		await authServices.register(username, password);
		res.redirect("/");
	} catch (error) {
		req.locals.error = "Passwords do not match!";
		res.render("register");
	}
};

router.get("/login", renderLoginPage);
router.post("/login", loginUser);
router.get("/register", renderRegisterPage);
router.post("/register", registerUser);

module.exports = router;
