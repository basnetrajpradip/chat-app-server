import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

//Require route
const apiRouter = require("./routes/api");

const app = express();

//Set up mongoose connection
async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || " ");
  } catch (err) {
    console.error("Error connecting to database", err);
  }
}
mongoose.set("strictQuery", false);

main();

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
  })
);

app.use("/api", apiRouter);

server.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
