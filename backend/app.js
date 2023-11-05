const express = require("express");
const app = express();
app.use(express.json());

//route imports
const mail=require("./routes/mailRouter");

app.use("/",mail);

module.exports = app;