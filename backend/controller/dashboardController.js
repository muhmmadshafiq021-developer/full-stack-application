import Blog from "../models/Blog.js";
import Category from "../models/Category.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

// Get Blog Statistics
export const getBlogStats = async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: "Published" });
    const draftBlogs = await Blog.countDocuments({ status: "Draft" });
    const featuredBlogs = await Blog.countDocuments({ isFeatured: true });

    res.status(200).json({
      message: "Blog statistics fetched successfully",
      stats: {
        total: totalBlogs,
        published: publishedBlogs,
        draft: draftBlogs,
        featured: featuredBlogs,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Category Statistics
export const getCategoryStats = async (req, res) => {
  try {
    const totalCategories = await Category.countDocuments();
    const categoriesWithBlogs = await Category.aggregate([
      {
        $lookup: {
          from: "blogs",
          localField: "_id",
          foreignField: "category",
          as: "blogs",
        },
      },
      {
        $project: {
          name: 1,
          blogCount: { $size: "$blogs" },
        },
      },
    ]);

    res.status(200).json({
      message: "Category statistics fetched successfully",
      stats: {
        total: totalCategories,
        categoriesWithBlogs,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Comment Statistics
export const getCommentStats = async (req, res) => {
  try {
    const totalComments = await Comment.countDocuments();
    const pendingComments = await Comment.countDocuments({ status: "Pending" });
    const approvedComments = await Comment.countDocuments({ status: "Approved" });
    const rejectedComments = await Comment.countDocuments({ status: "Rejected" });

    res.status(200).json({
      message: "Comment statistics fetched successfully",
      stats: {
        total: totalComments,
        pending: pendingComments,
        approved: approvedComments,
        rejected: rejectedComments,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User Statistics
export const getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ role: "Admin" });
    const regularUsers = await User.countDocuments({ role: "User" });
    const activeUsers = await User.countDocuments({ isActive: true });
    const inactiveUsers = await User.countDocuments({ isActive: false });

    res.status(200).json({
      message: "User statistics fetched successfully",
      stats: {
        total: totalUsers,
        admin: adminUsers,
        regular: regularUsers,
        active: activeUsers,
        inactive: inactiveUsers,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Engagement Statistics
export const getEngagementStats = async (req, res) => {
  try {
    const totalViews = await Blog.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: "$views" },
        },
      },
    ]);

    const totalLikes = await Blog.aggregate([
      {
        $group: {
          _id: null,
          totalLikes: { $sum: "$likes" },
        },
      },
    ]);

    const commentLikes = await Comment.aggregate([
      {
        $group: {
          _id: null,
          totalCommentLikes: { $sum: "$likes" },
        },
      },
    ]);

    const mostViewedBlogs = await Blog.find({ status: "Published" })
      .sort({ views: -1 })
      .limit(5)
      .select("title views likes");

    const mostLikedBlogs = await Blog.find({ status: "Published" })
      .sort({ likes: -1 })
      .limit(5)
      .select("title likes views");

    res.status(200).json({
      message: "Engagement statistics fetched successfully",
      stats: {
        totalViews: totalViews[0]?.totalViews || 0,
        totalLikes: totalLikes[0]?.totalLikes || 0,
        totalCommentLikes: commentLikes[0]?.totalCommentLikes || 0,
        mostViewedBlogs,
        mostLikedBlogs,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Overall Dashboard Stats (All Stats Combined)
export const getAllDashboardStats = async (req, res) => {
  try {
    // Blog stats
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: "Published" });
    const draftBlogs = await Blog.countDocuments({ status: "Draft" });
    const featuredBlogs = await Blog.countDocuments({ isFeatured: true });

    // Category stats
    const totalCategories = await Category.countDocuments();

    // Comment stats
    const totalComments = await Comment.countDocuments();
    const pendingComments = await Comment.countDocuments({ status: "Pending" });

    // User stats
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ role: "Admin" });

    // Engagement stats
    const totalViews = await Blog.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: "$views" },
        },
      },
    ]);

    const totalLikes = await Blog.aggregate([
      {
        $group: {
          _id: null,
          totalLikes: { $sum: "$likes" },
        },
      },
    ]);

    res.status(200).json({
      message: "Dashboard statistics fetched successfully",
      stats: {
        blogs: {
          total: totalBlogs,
          published: publishedBlogs,
          draft: draftBlogs,
          featured: featuredBlogs,
        },
        categories: {
          total: totalCategories,
        },
        comments: {
          total: totalComments,
          pending: pendingComments,
        },
        users: {
          total: totalUsers,
          admin: adminUsers,
        },
        engagement: {
          totalViews: totalViews[0]?.totalViews || 0,
          totalLikes: totalLikes[0]?.totalLikes || 0,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
