import express from "express";
import {
  getBlogStats,
  getCategoryStats,
  getCommentStats,
  getUserStats,
  getEngagementStats,
  getAllDashboardStats,
} from "../controller/dashboardController.js";

const router = express.Router();

router.get("/blog-stats", getBlogStats);
router.get("/category-stats", getCategoryStats);
router.get("/comment-stats", getCommentStats);
router.get("/user-stats", getUserStats);
router.get("/engagement-stats", getEngagementStats);
router.get("/all", getAllDashboardStats);

export default router;
