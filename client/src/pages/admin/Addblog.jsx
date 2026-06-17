import React from 'react'

const Addblog = () => {
    return (
        <div className="min-h-screen bg-slate-50 p-6">

            <div className="mx-auto max-w-6xl">

                <h1 className="mb-8 text-4xl font-bold text-slate-900">
                    Add New Blog
                </h1>

                <form className="space-y-6">

                    <div className="rounded-3xl bg-white p-6 shadow-sm">

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block font-medium">
                                    Blog Title   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Slug     <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Meta Title      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Focus Keyword      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block font-medium">
                                    Meta Description    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="4"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Category   <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-xl border border-slate-300 p-3">
                                    <option>Select Category</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Tags   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="react, mern, seo"
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Featured Image    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Image Alt Text      <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block font-medium">
                                    Excerpt     <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="4"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block font-medium">
                                    Content      <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="12"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Canonical URL
                                </label>
                                <input
                                    type="url"
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Schema Type     <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-xl border border-slate-300 p-3">
                                    <option>Article</option>
                                    <option>BlogPosting</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Robots
                                </label>
                                <select className="w-full rounded-xl border border-slate-300 p-3">
                                    <option>index, follow</option>
                                    <option>noindex, follow</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Status   <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-xl border border-slate-300 p-3">
                                    <option>Published</option>
                                    <option>Draft</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Author   <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Publish Date
                                </label>
                                <input
                                    type="date"
                                    
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Featured Post
                                </label>
                                <select className="w-full rounded-xl border border-slate-300 p-3">
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                            </div>

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white hover:bg-slate-800"
                    >
                        Publish Blog
                    </button>

                </form>

            </div>

        </div>

    )
}

export default Addblog