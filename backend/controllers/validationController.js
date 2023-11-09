exports.testValidation = async (req, res) => {
      
    if(!req.body.name || !req.body.email)
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