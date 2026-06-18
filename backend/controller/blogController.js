import Blog from "../models/Blog.js";
import Category from "../models/Category.js";

// Create Blog
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      metaTitle,
      metaDescription,
      focusKeyword,
      excerpt,
      content,
      category,
      author,
      tags,
      featuredImage,
      imageAltText,
      canonicalUrl,
      schemaType,
      robots,
      status,
      isFeatured,
      publishedAt,
    } = req.body;

    if (
      !title ||
      !slug ||
      !metaTitle ||
      !metaDescription ||
      !focusKeyword ||
      !excerpt ||
      !content ||
      !category ||
      !author ||
      !featuredImage ||
      !imageAltText
    ) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res.status(400).json({ message: "Blog with this slug already exists" });
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const blog = new Blog({
      title,
      slug,
      metaTitle,
      metaDescription,
      focusKeyword,
      excerpt,
      content,
      category,
      author,
      tags: tags || [],
      featuredImage,
      imageAltText,
      canonicalUrl,
      schemaType: schemaType || "BlogPosting",
      robots: robots || "index, follow",
      status: status || "Draft",
      isFeatured: isFeatured || false,
      publishedAt: status === "Published" ? publishedAt || new Date() : null,
    });

    await blog.save();

    if (status === "Published") {
      await Category.findByIdAndUpdate(category, { $inc: { blogsCount: 1 } });
    }

    res.status(201).json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs with filters
export const getAllBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, category, search } = req.query;

    let filter = {};

    if (status) filter.status = status;
    if (category) filter.category = category;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;

    const blogs = await Blog.find(filter)
      .populate("category")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Blog.countDocuments(filter);

    res.status(200).json({
      message: "Blogs fetched successfully",
      blogs,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: parseInt(page),
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single blog by slug
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({ slug }).populate("category");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } });

    res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id).populate("category");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (updates.category && updates.category !== blog.category.toString()) {
      const newCategory = await Category.findById(updates.category);
      if (!newCategory) {
        return res.status(400).json({ message: "New category not found" });
      }
      await Category.findByIdAndUpdate(blog.category, { $inc: { blogsCount: -1 } });
      await Category.findByIdAndUpdate(updates.category, { $inc: { blogsCount: 1 } });
    }

    if (updates.slug && updates.slug !== blog.slug) {
      const existingBlog = await Blog.findOne({ slug: updates.slug });
      if (existingBlog) {
        return res.status(400).json({ message: "Blog with this slug already exists" });
      }
    }

    if (updates.status === "Published" && blog.status !== "Published") {
      updates.publishedAt = new Date();
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    }).populate("category");

    res.status(200).json({
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.status === "Published") {
      await Category.findByIdAndUpdate(blog.category, { $inc: { blogsCount: -1 } });
    }

    await Blog.findByIdAndDelete(id);

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get featured blogs
export const getFeaturedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({
      isFeatured: true,
      status: "Published",
    })
      .populate("category")
      .limit(10);

    res.status(200).json({
      message: "Featured blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get blogs by category
export const getBlogsByCategory = async (req, res) => {
  try {
    const { categorySlug } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const category = await Category.findOne({ slug: categorySlug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const skip = (page - 1) * limit;

    const blogs = await Blog.find({
      category: category._id,
      status: "Published",
    })
      .populate("category")
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Blog.countDocuments({
      category: category._id,
      status: "Published",
    });

    res.status(200).json({
      message: "Blogs fetched successfully",
      blogs,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: parseInt(page),
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
