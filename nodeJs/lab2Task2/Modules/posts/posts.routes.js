import { Router } from "express";
import {
  addPost,
  deletePost,
  getPosts,
  reversPost,
  searchPost,
  updatePost,
} from "./controller/posts.controller.js";

const postsRoute = Router();

postsRoute.get("/posts", getPosts);
postsRoute.get("/posts/reverse", reversPost);
postsRoute.get("/posts/:id", searchPost);
postsRoute.post("/posts", addPost);
postsRoute.delete("/posts/:id", deletePost);
postsRoute.put("/posts/:id", updatePost);

export default postsRoute;
