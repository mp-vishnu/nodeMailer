const app = require("./app");
const dotenv=require("dotenv");
//config
dotenv.config({ path: "config/config.env" });

const server=app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

