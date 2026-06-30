import React from 'react';
import { submitBlog } from '../../services/blogServices';
import { toast } from 'react-toastify';

const Addblog = () => {

    const handleSubmit = async () => {
        const blogData = {

        };

        try {
            const response = await submitBlog(blogData);
            toast.success(response.message || "Blog submitted successfully!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error submitting blog. Please try again.");
        }    
            
    };    

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 p-6">

            <div className="mx-auto max-w-6xl">

                <div className="mb-12">
                    <h1 className="mb-3 text-5xl font-bold text-slate-900">
                        Add New Blog
                    </h1>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <p className="mt-3 text-slate-600 font-medium">Create and publish your next amazing blog post</p>
                </div>

                <form className="space-y-6">

                    <div className="rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gradient-to-r from-blue-200 to-purple-200">

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Blog Information</h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-6"></div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Blog Title   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter blog title..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Slug     <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="blog-title-slug..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Meta Title      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="SEO meta title..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Focus Keyword      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Main keyword for SEO..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Meta Description    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="3"
                                    required
                                    placeholder="Describe your blog for search engines (155-160 characters)..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white resize-none"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Category   <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>Select Category</option>
                                    <option>React</option>
                                    <option>JavaScript</option>
                                    <option>Web Development</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Tags   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="react, mern, seo (comma separated)"
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Featured Image    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    required
                                    className="w-full rounded-xl border-2 border-dashed border-slate-300 p-4 outline-none focus:border-blue-500 transition-all bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-blue-100 cursor-pointer file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-semibold file:px-4 file:py-2 file:cursor-pointer hover:file:bg-blue-700"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Image Alt Text      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Describe the image for accessibility..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Excerpt     <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="3"
                                    required
                                    placeholder="Short summary of your blog (one paragraph)..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-slate-50 hover:bg-white resize-none"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Content      <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="12"
                                    required
                                    placeholder="Write your complete blog content here..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white resize-none font-mono text-sm"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Canonical URL
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com/blog..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Schema Type     <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>Article</option>
                                    <option>BlogPosting</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Robots
                                </label>
                                <select className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>index, follow</option>
                                    <option>noindex, follow</option>
                                    <option>index, nofollow</option>
                                    <option>noindex, nofollow</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Status   <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>Published</option>
                                    <option>Draft</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Author   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Publish Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Featured Post
                                </label>
                                <select className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                            </div>

                        </div>

                    </div>

                    <div className="flex gap-4 justify-end">
                        <button
                            type="button"
                            className="rounded-xl cursor-pointer px-8 py-3 font-semibold text-slate-700 bg-white border-2 border-slate-300 transition-all hover:bg-slate-50 hover:border-slate-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-xl cursor-pointer px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-lg active:scale-95"
                        >
                            Publish Blog
                        </button>
                    </div>

                </form>

            </div>

        </div>

    )
}

export default Addblog