import express from "express";
import { createUser, login, logout, userProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", createUser);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, userProfile);

export default router;
