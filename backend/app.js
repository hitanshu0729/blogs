import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";

import fileUpload from "express-fileupload";
import blogRouter from "./routes/blogRouter.js";
dotenv.config();
const app = express();
import cors from "cors";
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);
dbConnection();
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);
export default app;
