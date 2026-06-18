import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    metaTitle: {
      type: String,
      required: [true, "Meta title is required"],
    },
    metaDescription: {
      type: String,
      required: [true, "Meta description is required"],
    },
    focusKeyword: {
      type: String,
      required: [true, "Focus keyword is required"],
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    featuredImage: {
      type: String,
      required: [true, "Featured image is required"],
    },
    imageAltText: {
      type: String,
      required: [true, "Image alt text is required"],
    },
    canonicalUrl: {
      type: String,
    },
    schemaType: {
      type: String,
      enum: ["Article", "BlogPosting"],
      default: "BlogPosting",
    },
    robots: {
      type: String,
      default: "index, follow",
    },
    status: {
      type: String,
      enum: ["Published", "Draft"],
      default: "Draft",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
