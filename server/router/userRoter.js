 
 const express = require("express");
const registerController = require("../controller/userControler")
 const router = express.Router();


 router.route("/registration-complete")
                        .post(registerController.registrationComplete);

router.route("/register")
                        .post(registerController.register)


router.route("/verify")
                       .post(registerController.verify)                       


router.route("/users")
                       .get(registerController.getAllUsers)                       



 module.exports=router;