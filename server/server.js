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

hashpass("Praveen@005");
checkPass("Praveen@005", "$2b$10$JfstBxwX5IC1UE9lMgj9vOCvWuIcuywr6UY6dIb0sFgecFZ7S7XT2")

app.use("/api/User", userRoute);

app.listen(PORT, () => console.log("Server Running on Port 3000"));
