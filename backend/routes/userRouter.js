import {
  register,
  login,
  logout,
  getMyProfile,
  getAllAuthors,
} from "../controllers/userController.js";
import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/register", register);
router.get("/myprofile", isAuthenticated, getMyProfile);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/authors", getAllAuthors);
export default router;
