const express = require("express")
const { createproduct, updateproduct, loginproduct } = require("../controller/productController")
const router = express.Router()
const userController = require("../controller/userController")
const { authentication } = require("../middleware/auth")

//------------ user registration -----------------

router.post("/signup", userController.createUser)
router.post("/login", userController.loginUser)

router.post("/admin/login", loginproduct)


//------------------foods---------------------//
router.post("/admin/addProduct", createproduct)
router.post("/admin/updateProduct", authentication, updateproduct)


router.all("/*", (req, res) => { res.status(400).send({ status: false, message: "Endpoint is not correct" }) })


module.exports = router