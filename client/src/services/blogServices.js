import { createBlog } from "../routes/blogroutes"; 

export const submitBlog = async (blogData) => {
  try {
    const response = await createBlog(blogData);
    return response;
  } catch (error) {
    console.error("Error submitting blog:", error);
    throw error;
  }
};