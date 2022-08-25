import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getById,
  getMyPosts,
  removePost,
  updatePost,
} from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//Create Post
//htttp://localhost:3002/api/posts
router.post("/", checkAuth, createPost);

//get all  Post
//htttp://localhost:3002/api/posts
router.get("/", getAllPosts);

//Get By Id
//htttp://localhost:3002/api/posts/:id
router.get("/:id", getById);

//Edit
//htttp://localhost:3002/api/posts/:id
router.put("/:id", checkAuth, updatePost);

//Get My Posts
//htttp://localhost:3002/api/posts/user/me
router.get("/user/me", checkAuth, getMyPosts);

//Get My Posts
//htttp://localhost:3002/api/posts/:id
router.delete("/:id", checkAuth, removePost);
export default router;
