import Category from "../models/Category.js";
import Blog from "../models/Blog.js";

// Create category
export const createCategory = async (req, res) => {
  try {
    const { name, slug, description } = req.body;

    if (!name || !slug) {
      return res.status(400).json({ message: "Name and slug are required" });
    }

    const existingCategory = await Category.findOne({
      $or: [{ name }, { slug }],
    });

    if (existingCategory) {
      return res.status(400).json({ message: "Category with this name or slug already exists" });
    }

    const category = new Category({
      name,
      slug: slug.toLowerCase(),
      description,
    });

    await category.save();

    res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get category by slug
export const getCategoryBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await Category.findOne({ slug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const blogsCount = await Blog.countDocuments({
      category: category._id,
      status: "Published",
    });

    res.status(200).json({
      message: "Category fetched successfully",
      category: {
        ...category.toObject(),
        blogsCount,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get category by ID
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category fetched successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, description } = req.body;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (name && name !== category.name) {
      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ message: "Category with this name already exists" });
      }
    }

    if (slug && slug !== category.slug) {
      const existingCategory = await Category.findOne({ slug: slug.toLowerCase() });
      if (existingCategory) {
        return res.status(400).json({ message: "Category with this slug already exists" });
      }
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        name: name || category.name,
        slug: (slug || category.slug).toLowerCase(),
        description: description !== undefined ? description : category.description,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const blogsInCategory = await Blog.countDocuments({ category: id });

    if (blogsInCategory > 0) {
      return res.status(400).json({
        message: `Cannot delete category with ${blogsInCategory} blogs. Please reassign or delete the blogs first.`,
      });
    }

    await Category.findByIdAndDelete(id);

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
