const express = require("express");
const app = express();
app.use(express.json());

//route imports
 const mail=require("./routes/mailRouter");
 const validate=require('./routes/validationRouter');

 app.use("/",mail);
 app.use("/",validate);


module.exports = app;