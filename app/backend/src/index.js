import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js"
import connectDb from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(3000, () => {
  console.log("Server is running on port", PORT);
  connectDb();
});
