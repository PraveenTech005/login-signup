const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/DB");
const userRoute = require("./routes/user.Route");

const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://login-signup-kappa-fawn.vercel.app",
];

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not Allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

app.use("/api/User", userRoute);

app.listen(PORT, () => console.log("Server Running on Port 3000"));
