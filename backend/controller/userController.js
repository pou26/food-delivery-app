const userModel = require("../models/userModel");
const validator = require("../validators/validator")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
// const { uploadFile } = require("../AWS/aws")

//----------------create user------------------------

const createUser = async function (req, res) {

  try {
    let data = req.body;

    //------------- validating request body--------------------

    // if (!validator.isValidRequestBody(data)) {
    //   return res.status(400).send({ status: false, message: "PLease provide a valid request body" })
    // }

    //------------- destructring-------------------------------
    
    let { password } = data;

    //---------------validation starts -------------------------

    //-------------- name validation---------------------

    // if (!name) return res.status(400).send({ status: false, msg: "name is requried" })
    // if (!validator.isNotEmpty(name)) return res.status(400).send({ status: false, msg: "name is required" })
    // data.name = name.trim()
    // if (!validator.isWrong(data.name)) return res.status(400).send({ status: false, msg: "name is not valid" })

    //-------------- phone no. validation---------------------

    // if (!mobile) return res.status(400).send({ status: false, msg: "phone no. is requried" })
    // if(!validator.isNumber)
    // if (!validator.isValid(mobile)) return res.status(400).send({ status: false, msg: "phone no must be of type string and should not be empty" })
    // data.mobile = mobile.trim()
    // if (!validator.isValidMobile(data.mobile)) {
    //   return res.status(400).send({ status: false, message: "PLease provide a valid phone number of length 10" })
    // }

    //----------------email validation-----------------------
    // if (!email) return res.status(400).send({ status: false, msg: "email is required" })
    // if (!validator.isNotEmpty(email)) return res.status(400).send({ status: false, msg: "email should not be empty" })
    // data.email = email.trim()
    // if (!validator.isValidEmail(data.email)) {
    //   return res.status(400).send({ status: false, message: "Please provide a valid email ID" })
    // }

    //----------------password validation-----------------------

    // if (!password) return res.status(400).send({ status: false, msg: "password is required" })
    // if (!validator.isNotEmpty(password)) return res.status(400).send({ status: false, msg: "password is required" })
    // data.password = password.trim()
    // if (!validator.isValidPassword(data.password)) {
    //   return res.status(400).send({ status: false, message: "Password must contain an uppercase,a lowercase , a special character and should be of length between 8-15" })
    // }
   // using bcrypt
      
      let salt = await bcrypt.genSalt(10)
      let hash =  await bcrypt.hash(password, salt);
      console.log(hash);
      data.password = hash;

    //---------------address validation-------------------------

    // if (Object.keys(data).some(a => a === "location")) {  //.some checking the address element is present in the array or not
      // if (!validator.isValidRequestBody(location)) {
      //   return res.status(400).send({ status: false, message: "Please provide valid body for location " })
      // }

    //}

    //---------------- check for duplicacy---------------------

    //----------------duplicacy for phone no.------------------

    // const findPhone = await userModel.findOne({ mobile: mobile });
    // if (findPhone) {
    //   return res.status(409).send({ status: false, message: "User with this phone number already exists" })
    // }
  
    //----------------duplicacy for email ------------------

    const findEmail = await userModel.findOne({ email: data.email });
    if (findEmail) {
      return res.status(400).send({ message: "User with this email Id alredy exists." })
    }
    //----------------creation starts ----------------------
    
  //   const data1 = {
  //     name: name,
  //     email: email,
  //     // mobile: mobile,
  //     password: hash,
  //     location: location

  // }

  
    const created = await userModel.create(data)
    return res.status(201).send({ message: created });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error.message })
  }
}

const loginUser = async (req, res) => {

  try {
    const requestBody = req.body;
    if (!validator.isValidRequestBody(requestBody)) {
      res.status(400).send({ status: false, msg: "Invalid request parameters.Please provide login credentials", })
    }
    let { email, password} = requestBody;
        //------------email validation-----------------
        if (!email) {
          return res.status(400).send({
            status: false,
            message: `Email is required`
          });
        }
        if (!validator.isValidEmail(email)) {
          return res.status(400).send({
            status: false,
            message: `Provide valid email address`,
          });
        }
    
        //------------password validation-----------------
    
        if (!password) {
          return res.status(400).send({
            status: false,
            message: `Password is required`
          });
        }
        if (!validator.isValidPassword(password)) {
          return res.status(400).send({
            status: false,
            message: "Please enter a valid password"
          });
        }

        //----------------mobile number validation--------------
        // if (!validator.isValid(mobile)) return res.status(400).send({ status: false, msg: "please provide a valid mobile number" })
    
        let user = await userModel.findOne({email})
        if (!user) {
          return res.status(400).send({ status: false, message: "login failed!E-mail is incorrect" })

        }

        let passwordBody = user.password;
        let encryptPassword = await bcrypt.compare(password, passwordBody);

        if (!encryptPassword) return res.status(400).send({ status: false, message: "Login failed! password is incorrect." });
        let userId = user._id
        // create token
        let token = jwt.sign(
            {
                userId: user._id.toString(),
            },
            'food-delivery-app',
            {expiresIn:"12h"}
        )

        res.status(200).send({ status: true, message: 'Success', userId: { userId, token } });

    } catch (err) {
        res.status(500).send({ message: "Server not responding", error: err.message });
    }
};




module.exports = { createUser, loginUser }



