const express = require("express");
const {
    formValidation,
}=require("../controllers/formController");
const {
    sendMail,
}=require("../controllers/mailController");

const router = express.Router();

router.route("/validate").post(formValidation);
router.route("/email").post(sendMail);

module.exports = router;