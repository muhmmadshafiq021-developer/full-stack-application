import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryBySlug,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.get("/slug/:slug", getCategoryBySlug);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
