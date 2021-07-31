const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());//req.body

//routes

app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.use("/userCrud", require("./routes/users_crud"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});