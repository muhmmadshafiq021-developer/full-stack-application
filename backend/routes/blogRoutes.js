import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  getBlogById,
  updateBlog,
  deleteBlog,
  getFeaturedBlogs,
  getBlogsByCategory,
} from "../controller/blogController.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/featured", getFeaturedBlogs);
router.get("/category/:categorySlug", getBlogsByCategory);
router.get("/slug/:slug", getBlogBySlug);
router.get("/:id", getBlogById);
router.get("/", getAllBlogs);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
