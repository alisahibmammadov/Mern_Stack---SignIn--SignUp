import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./Routers/userRouter.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", UserRouter);

app.listen(5000, () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});
