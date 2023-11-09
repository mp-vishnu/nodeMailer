const express = require("express");
const {
    nameValidation,
    emailValidation
}=require("../controllers/validationController");

const router = express.Router();

router.route("/validation1").post(nameValidation);
router.route("/validation2").post(emailValidation);

module.exports = router;