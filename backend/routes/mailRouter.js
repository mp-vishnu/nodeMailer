const express = require("express");
const {
    sendMail,
    testConnection
}=require("../controllers/mailController");

const router = express.Router();

router.route("/email").post(sendMail);

router.route("/test").get(testConnection);
module.exports = router;