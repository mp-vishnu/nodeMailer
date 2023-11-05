const sendEmail = require("../utils/sendEmail");
exports.sendMail = async (req, res) => {

    const user= {
      email:req.body.email,
      name:req.body.name
    }
    try {
      await sendEmail({
        //email: user.email,
        email:"athulraj@weamse.in",
        subject: 'Confirmation mail',
        message:`${user.name} registered to your app with ${user.email}`,
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