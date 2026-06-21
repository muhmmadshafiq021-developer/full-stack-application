import React from 'react';
import {Pencil, Trash2} from 'lucide-react';

const Categories = () => {
    return (
        <div className="min-h-screen bg-slate-50 p-6">

            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Categories
                    </h1>
                    <p className="mt-2 text-slate-500">
                        Manage your blog categories
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-8">
                    <div className="rounded-3xl bg-white p-6 shadow-sm">
                        <h3 className="text-sm text-slate-500">
                            Total Categories
                        </h3>
                        <p className="mt-3 text-4xl font-bold text-slate-900">
                            12
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {/* Add Category Form */}
                    <div className="rounded-3xl bg-white p-6 shadow-sm">

                        <h2 className="mb-6 text-2xl font-bold">
                            Add Category
                        </h2>

                        <form className="space-y-5">

                            <div>
                                <label className="mb-2 block font-medium">
                                    Category Name <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    required
                                    placeholder="Technology"
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Slug <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    required
                                    placeholder="technology"
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Description
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Category description..."
                                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
                            >
                                Add Category
                            </button>

                        </form>

                    </div>

                    {/* Categories Table */}
                    <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">

                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">
                                Categories List
                            </h2>
                        </div>

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="py-4 text-left text-sm font-semibold text-slate-500">
                                            Category
                                        </th>

                                        <th className="py-4 text-left text-sm font-semibold text-slate-500">
                                            Slug
                                        </th>

                                        <th className="py-4 text-left text-sm font-semibold text-slate-500">
                                            Blogs
                                        </th>

                                        <th className="py-4 text-left text-sm font-semibold text-slate-500">
                                            Created
                                        </th>

                                        <th className="py-4 text-left text-sm font-semibold text-slate-500">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-slate-100">
                                        <td className="py-4 font-medium">
                                            Technology
                                        </td>

                                        <td>technology</td>

                                        <td>25</td>

                                        <td>16 Jun 2026</td>

                                        <td>
                                            <div className="flex gap-2">

                                                <button className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                                    <Pencil size={16} className="inline mr-2" />
                                                    Edit
                                                </button>

                                                <button className="rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                                                    <Trash2 size={16} className="inline mr-2" />
                                                    Delete
                                                </button>

                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-slate-100">
                                        <td className="py-4 font-medium">
                                            Programming
                                        </td>

                                        <td>programming</td>

                                        <td>18</td>

                                        <td>15 Jun 2026</td>

                                        <td>
                                            <div className="flex gap-2">

                                                <button className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                                    <Pencil size={16} className="inline mr-2" />
                                                    Edit
                                                </button>

                                                <button className="rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                                                    <Trash2 size={16} className="inline mr-2" />
                                                    Delete
                                                </button>

                                            </div>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Categories