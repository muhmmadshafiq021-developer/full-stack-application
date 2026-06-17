import React from 'react'

const Dashboard = () => {
    return (

        <div className="min-h-screen bg-slate-50 p-6">

            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Dashboard
                    </h1>
                    <p className="mt-2 text-slate-500">
                        Welcome back, Admin 👋
                    </p>
                </div>

                <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    + New Blog
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Total Blogs
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-slate-900">
                        120
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Published Blogs
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-emerald-600">
                        95
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Draft Blogs
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-amber-500">
                        25
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Categories
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-blue-600">
                        12
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Comments
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-purple-600">
                        348
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Users
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-rose-600">
                        56
                    </p>
                </div>

            </div>

            {/* Bottom Grid */}
            <div className="mt-8 grid gap-6 xl:grid-cols-3">

                {/* Recent Blogs */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">
                            Recent Blogs
                        </h2>
                        <button className="text-sm font-medium text-blue-600">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">

                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="py-3 text-left text-sm text-slate-500">
                                        Title
                                    </th>
                                    <th className="py-3 text-left text-sm text-slate-500">
                                        Status
                                    </th>
                                    <th className="py-3 text-left text-sm text-slate-500">
                                        Date
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-slate-100">
                                    <td className="py-4 font-medium">
                                        Getting Started with MERN
                                    </td>
                                    <td>
                                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                            Published
                                        </span>
                                    </td>
                                    <td>16 Jun 2026</td>
                                </tr>

                                <tr className="border-b border-slate-100">
                                    <td className="py-4 font-medium">
                                        React Router Guide
                                    </td>
                                    <td>
                                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                                            Draft
                                        </span>
                                    </td>
                                    <td>15 Jun 2026</td>
                                </tr>

                                <tr>
                                    <td className="py-4 font-medium">
                                        MongoDB Atlas Setup
                                    </td>
                                    <td>
                                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                            Published
                                        </span>
                                    </td>
                                    <td>14 Jun 2026</td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>

                {/* Quick Actions */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                    <h2 className="mb-5 text-xl font-bold text-slate-900">
                        Quick Actions
                    </h2>

                    <div className="space-y-3">

                        <button className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800">
                            Add New Blog
                        </button>

                        <button className="w-full rounded-xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">
                            Add Category
                        </button>

                        <button className="w-full rounded-xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">
                            Manage Users
                        </button>

                    </div>

                    <div className="mt-8">
                        <h3 className="mb-4 text-lg font-semibold">
                            Recent Comments
                        </h3>

                        <div className="space-y-4">

                            <div className="rounded-xl bg-slate-50 p-3">
                                <p className="text-sm">
                                    Ali commented on MERN Guide
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-3">
                                <p className="text-sm">
                                    Ahmed commented on React Router
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-3">
                                <p className="text-sm">
                                    Sara commented on MongoDB Atlas
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Dashboard