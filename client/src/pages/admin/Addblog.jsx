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
                                    Blog Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Meta Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Focus Keyword
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block font-medium">
                                    Meta Description
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Category
                                </label>
                                <select className="w-full rounded-xl border border-slate-300 p-3">
                                    <option>Select Category</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Tags
                                </label>
                                <input
                                    type="text"
                                    placeholder="react, mern, seo"
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Featured Image
                                </label>
                                <input
                                    type="file"
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Image Alt Text
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block font-medium">
                                    Excerpt
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full rounded-xl border border-slate-300 p-3"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block font-medium">
                                    Content
                                </label>
                                <textarea
                                    rows="12"
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
                                    Schema Type
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
                                    Status
                                </label>
                                <select className="w-full rounded-xl border border-slate-300 p-3">
                                    <option>Published</option>
                                    <option>Draft</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Author
                                </label>
                                <input
                                    type="text"
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