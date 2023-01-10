const router = require("express").Router();
const userController = require("../controllers/usercontroller");

router.route("/usuario/add").post((req,res) => userController.create(req,res))

module.exports = router
