import app from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
