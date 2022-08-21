import { Router } from "express";
import { register, login, getUser } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

// Register
router.post("/register", register);

//Login
router.post("/login", login);

//Get
router.get("/get", checkAuth, getUser);

export default router;
