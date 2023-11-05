// Forgot Password
exports.forgotPassword = async (req, res) => {

  const message ="test mail";

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
   console.log(error)
   const express = require("express");
   const {
     forgotpassword
   } = require("../controllers/userController");
  }
};


