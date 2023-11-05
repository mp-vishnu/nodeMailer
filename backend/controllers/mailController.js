const sendEmail = require("../utils/sendEmail");
exports.sendMail = async (req, res) => {

    const message ="test mail";
    const user= {email:req.body.email}
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
     console.log(error);
    }}

    exports.testConnection = async (req, res) => {

      
          res.status(200).json({
            success: true,
            message: `connection done`,
          });
        }