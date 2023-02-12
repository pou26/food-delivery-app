const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

// ------------------------------------ Authentication -----------------------------------------------------//
const authentication = async (req, res, next) => {
    try {
        let cookies = req.headers.cookie;
        if (!cookies)
            return res.status(401).send({ status: 401, message: "Unauthorized person" })
        const token = cookies.split("=")[1]

        jwt.verify(token, "food-delivery-app", (err, data) => {
            if (err)
                return res.status(401).send({ status: false, message: err.message })
            else
                req.decodedToken = data;

        });
        let validateUser = await userModel.findOne({ _id: req.decodedToken.userId })
        if (!validateUser)
            return res.status(403).send("Not authenticated")
        next()
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

module.exports = { authentication }