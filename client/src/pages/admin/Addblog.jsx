import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { submitBlog } from '../../services/blogServices';

const Addblog = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (blogData) => {

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

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

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

                                    placeholder="Enter blog title..."
                                    {...register("title", { required: "Blog title is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white"
                                />
                                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Slug     <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="blog-title-slug..."
                                    {...register("slug", { required: "Slug is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white"
                                />
                                {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Meta Title      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="SEO meta title..."
                                    {...register("metaTitle", { required: "Meta title is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-slate-50 hover:bg-white"
                                />
                                {errors.metaTitle && <p className="text-red-500 text-sm mt-1">{errors.metaTitle.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Focus Keyword      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="Main keyword for SEO..."
                                    {...register("focusKeyword", { required: "Focus keyword is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-slate-50 hover:bg-white"
                                />
                                {errors.focusKeyword && <p className="text-red-500 text-sm mt-1">{errors.focusKeyword.message}</p>}
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Meta Description    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="3"

                                    placeholder="Describe your blog for search engines (155-160 characters)..."
                                    {...register("metaDescription", { required: "Meta description is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white resize-none"
                                />
                                {errors.metaDescription && <p className="text-red-500 text-sm mt-1">{errors.metaDescription.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Category   <span className="text-red-500">*</span>
                                </label>
                                <select
                                    {...register("category", { required: "Category is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>Select Category</option>
                                    <option>React</option>
                                    <option>JavaScript</option>
                                    <option>Web Development</option>
                                </select>
                                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Tags   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="react, mern, seo (comma separated)"
                                    {...register("tags", { required: "Tags are required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-slate-50 hover:bg-white"
                                />
                                {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Featured Image    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    {...register("featuredImage", { required: "Featured image is required" })}
                                    className="w-full rounded-xl border-2 border-dashed border-slate-300 p-4 outline-none focus:border-blue-500 transition-all bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-blue-100 cursor-pointer file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-semibold file:px-4 file:py-2 file:cursor-pointer hover:file:bg-blue-700"
                                />
                                {errors.featuredImage && <p className="text-red-500 text-sm mt-1">{errors.featuredImage.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Image Alt Text      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="Describe the image for accessibility..."
                                    {...register("imageAltText", { required: "Image alt text is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white"
                                />
                                {errors.imageAltText && <p className="text-red-500 text-sm mt-1">{errors.imageAltText.message}</p>}
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Excerpt     <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="3"

                                    placeholder="Short summary of your blog (one paragraph)..."
                                    {...register("excerpt", { required: "Excerpt is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-slate-50 hover:bg-white resize-none"
                                />
                                {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt.message}</p>}
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Content      <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="12"

                                    placeholder="Write your complete blog content here..."
                                    {...register("content", { required: "Content is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-slate-50 hover:bg-white resize-none font-mono text-sm"
                                />
                                {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Canonical URL
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com/blog..."
                                    {...register("canonicalUrl")}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all bg-slate-50 hover:bg-white"
                                />

                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Schema Type     <span className="text-red-500">*</span>
                                </label>
                                <select
                                    {...register("schemaType", { required: "Schema type is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>Article</option>
                                    <option>BlogPosting</option>
                                </select>
                                {errors.schemaType && <p className="text-red-500 text-sm mt-1">{errors.schemaType.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Robots
                                </label>
                                <select
                                    {...register("robots")}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-slate-50 hover:bg-white font-medium">
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
                                <select
                                    {...register("status", { required: "Status is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-slate-50 hover:bg-white font-medium">
                                    <option>Published</option>
                                    <option>Draft</option>
                                </select>
                                {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Author   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="Your name..."
                                    {...register("author", { required: "Author name is required" })}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all bg-slate-50 hover:bg-white"
                                />
                                {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Publish Date
                                </label>
                                <input
                                    type="date"
                                    {...register("publishDate")}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all bg-slate-50 hover:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold text-slate-700">
                                    Featured Post
                                </label>
                                <select
                                    {...register("featured")}
                                    className="w-full rounded-xl border-2 border-slate-200 p-3.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all bg-slate-50 hover:bg-white font-medium"
                                >
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
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