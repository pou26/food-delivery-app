const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
// const { uploadFile } = require("../AWS/aws")

const createUser = async function (req, res) {

  try {

    let {email,password} = req.body

    const findEmail = await userModel.findOne({ email: email });
    if (findEmail) {
      return res.status(400).send({ message: "User with this email Id alredy exists." })
    }
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(password, salt);
    req.body.password = hash;

    const created = await userModel.create(req.body)
    return res.status(201).send({ message: created });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error.message })
  }
}

const loginUser = async (req, res) => {
  try {

    let { email, password } = req.body;
    let user = await userModel.findOne({ email  })
    if (!user) 
      return res.status(400).send({ status: false, message: "login failed!E-mail is incorrect" })
    
    let encryptPassword = await bcrypt.compare(password, user.password);
    if (!encryptPassword) return res.status(400).send({ status: false, message: "Login failed! password is incorrect." });
    
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
};


module.exports = { createUser, loginUser }
