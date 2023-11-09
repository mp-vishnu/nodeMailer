exports.nameValidation = async (req, res) => {
      
    if(!req.body.name)
    {
      res.status(201).json({
        success: false,
        message: `Data is not provided`,
      });
    }
  
    else{
      res.status(200).json({
        success: true,
        name:req.body.name,
        message: `Data is provided`,
      });
    }
  }

  exports.emailValidation = async (req, res) => {
      
    if(!req.body.email)
    {
      res.status(201).json({
        success: false,
        message: `Data is not provided`,
      });
    }
  
    else{
      res.status(200).json({
        success: true,
        message: `Data is provided`,
      });
    }
  }