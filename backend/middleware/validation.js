export const validateBlogInput = (req, res, next) => {
  const { title, slug, metaTitle, metaDescription, focusKeyword, excerpt, content, category, author, featuredImage, imageAltText } = req.body;

  const errors = {};

  if (!title || title.trim() === "") errors.title = "Title is required";
  if (!slug || slug.trim() === "") errors.slug = "Slug is required";
  if (!metaTitle || metaTitle.trim() === "") errors.metaTitle = "Meta title is required";
  if (!metaDescription || metaDescription.trim() === "") errors.metaDescription = "Meta description is required";
  if (!focusKeyword || focusKeyword.trim() === "") errors.focusKeyword = "Focus keyword is required";
  if (!excerpt || excerpt.trim() === "") errors.excerpt = "Excerpt is required";
  if (!content || content.trim() === "") errors.content = "Content is required";
  if (!category) errors.category = "Category is required";
  if (!author || author.trim() === "") errors.author = "Author is required";
  if (!featuredImage || featuredImage.trim() === "") errors.featuredImage = "Featured image is required";
  if (!imageAltText || imageAltText.trim() === "") errors.imageAltText = "Image alt text is required";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ message: "Validation errors", errors });
  }

  next();
};

export const validateCategoryInput = (req, res, next) => {
  const { name, slug } = req.body;

  const errors = {};

  if (!name || name.trim() === "") errors.name = "Category name is required";
  if (!slug || slug.trim() === "") errors.slug = "Category slug is required";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ message: "Validation errors", errors });
  }

  next();
};
