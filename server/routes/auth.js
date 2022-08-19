import { Router } from "express";
import { register, login, getUser } from "../controllers/auth.js";

const router = new Router();

// Register
router.post("/register", register);

//Login
router.post("/login", login);

//Get
router.get("/get", getUser);

export default router;
