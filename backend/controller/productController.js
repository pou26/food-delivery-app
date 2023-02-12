const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports = {
    loginproduct: async (req, res) => {
        try {

            let { email, password } = req.body;
            let user = await userModel.findOne({ email })
            if (!user)
                return res.status(400).send({ status: false, message: "login failed!E-mail is incorrect" })
            let encryptPassword = await bcrypt.compare(password, user.password);
            if (!encryptPassword) return res.status(400).send({ status: false, message: "Password is incorrect." });

            let token = jwt.sign(
                {
                    userId: user._id,
                },
                'food-delivery-app',
                // { expiresIn: "12h" }
            )
            res.cookie("token", token, { httpOnly: true })
            res.status(200).send({ status: true, message: 'Login Successfull' });

        } catch (err) {
            res.status(500).send({ message: "Server not responding", error: err.message });
        }
    },
    createproduct: async (req, res) => {
        await productModel.create(req.body)
        res.status(201).send("Product created successfully !")
    },
    updateproduct: async (req, res) => {

        await productModel.findByIdAndUpdate(req.decodedToken.userId, req.body)
        res.status(200).send("Product created successfully !")
    }
}
