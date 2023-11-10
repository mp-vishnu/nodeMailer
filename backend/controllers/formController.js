exports.formValidation = async (req, res) => {
      const name=req.body.name;
      const email=req.body.email;
      const phone=req.body.phone;
    if(!name || !email || !phone)
    {
      res.status(400).json({
        success: false,
        message: `Fill all fields`,
      });
    }
    else{
         // Email validation pattern
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!emailRegex.test(email) && phone.length!==10)
       {
        res.status(422).json({
          success: false,
          data:3,
          message: `Email format is wrong and Phone number requires 10 digits`,
        }); 
       }
        if (!emailRegex.test(email)) {
            res.status(422).json({
                success: false,
                data:1,
                message: `Email format is wrong`,
              });
            }
      
         if(phone.length!==10)
            {
              console.log("phone.length -----"+phone.length);
                res.status(422).json({
                    success: false,
                    data:2,
                    message: `Phone number requires 10 digits`,
                  }); 
            }
            else{
              res.status(200).json({
                success: true,
                message: `Data format is fine`,
              });
            }
    }
  }
