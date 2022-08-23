import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//Create Post
//htttp://localhost:3002/api/posts
router.post("/", checkAuth, createPost);

//get Post
//htttp://localhost:3002/api/posts
router.get("/", getAllPosts);

export default router;
