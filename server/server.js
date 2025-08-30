const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/DB");
const userRoute = require("./routes/user.Route");
const {hashpass, checkPass} = require("./helpers/helper");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/User", userRoute);

app.listen(PORT, () => console.log("Server Running on Port 3000"));
