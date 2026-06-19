import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 p-6">

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
                    <Link to="/admin/blogs/add">
                        + New Blog
                    </Link>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                    <h3 className="text-sm font-medium text-slate-300">
                        Total Blogs
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-white">
                        120
                    </p>
                    <div className="mt-3 h-1.5 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                    <h3 className="text-sm font-medium text-emerald-50">
                        Published Blogs
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-white">
                        95
                    </p>
                    <div className="mt-3 h-1.5 w-12 bg-gradient-to-r from-emerald-200 to-cyan-300 rounded-full"></div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                    <h3 className="text-sm font-medium text-amber-50">
                        Draft Blogs
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-white">
                        25
                    </p>
                    <div className="mt-3 h-1.5 w-12 bg-gradient-to-r from-yellow-200 to-amber-100 rounded-full"></div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                    <h3 className="text-sm font-medium text-blue-100">
                        Categories
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-white">
                        12
                    </p>
                    <div className="mt-3 h-1.5 w-12 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                    <h3 className="text-sm font-medium text-purple-100">
                        Comments
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-white">
                        348
                    </p>
                    <div className="mt-3 h-1.5 w-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"></div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-red-600 p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                    <h3 className="text-sm font-medium text-rose-100">
                        Users
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-white">
                        56
                    </p>
                    <div className="mt-3 h-1.5 w-12 bg-gradient-to-r from-red-300 to-pink-300 rounded-full"></div>
                </div>

            </div>

            {/* Bottom Grid */}
            <div className="mt-8 grid gap-6 xl:grid-cols-3">

                {/* Recent Blogs */}
                <div className="rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-gradient-to-r from-blue-200 to-purple-200 xl:col-span-2 backdrop-blur-sm">

                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                Recent Blogs
                            </h2>
                            <div className="mt-1 h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
                        </div>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
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
                <div className="rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-gradient-to-r from-purple-200 to-pink-200 backdrop-blur-sm">

                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            Quick Actions
                        </h2>
                        <div className="mt-1 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded"></div>
                    </div>

                    <div className="mt-5 space-y-3">

                        <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 font-medium text-white transition hover:shadow-lg hover:from-blue-700 hover:to-blue-800">
                            <Link to="/admin/blogs/add">
                                Add New Blog
                            </Link>
                        </button>

                        <button className="w-full rounded-xl border-2 border-purple-500 px-4 py-3 font-medium text-purple-600 transition hover:bg-purple-50 hover:border-purple-600">
                            <Link to="/admin/categories">
                                Manage Categories
                            </Link>
                        </button>

                        <button className="w-full rounded-xl border-2 border-emerald-500 px-4 py-3 font-medium text-emerald-600 transition hover:bg-emerald-50 hover:border-emerald-600">
                            Manage Users
                        </button>

                    </div>

                    <div className="mt-8">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">
                            Recent Comments
                        </h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded mb-4"></div>

                        <div className="space-y-4">

                            <div className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-4 border-l-4 border-blue-500">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-blue-700">Ali</span> commented on MERN Guide
                                </p>
                            </div>

                            <div className="rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 p-4 border-l-4 border-purple-500">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-purple-700">Ahmed</span> commented on React Router
                                </p>
                            </div>

                            <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 border-l-4 border-emerald-500">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-emerald-700">Sara</span> commented on MongoDB Atlas
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