const express = require("express");
const {
    testValidation
}=require("../controllers/validationController");

const router = express.Router();

router.route("/validation").post(testValidation);

module.exports = router;