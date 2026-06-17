import React from 'react'

const Dashboard = () => {
    return (

        <div className="dashboard">

            <h1>Dashboard</h1>

            {/* Stats Cards */}
            <div className="stats-grid">

                <div className="card">
                    <h3>Total Blogs</h3>
                    <p>120</p>
                </div>

                <div className="card">
                    <h3>Published Blogs</h3>
                    <p>95</p>
                </div>

                <div className="card">
                    <h3>Draft Blogs</h3>
                    <p>25</p>
                </div>

                <div className="card">
                    <h3>Total Categories</h3>
                    <p>12</p>
                </div>

                <div className="card">
                    <h3>Total Comments</h3>
                    <p>348</p>
                </div>

                <div className="card">
                    <h3>Total Users</h3>
                    <p>56</p>
                </div>

            </div>

            {/* Recent Blogs */}
            <div className="section">
                <h2>Recent Blogs</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Getting Started with MERN</td>
                            <td>Published</td>
                            <td>16 Jun 2026</td>
                        </tr>

                        <tr>
                            <td>React Router Guide</td>
                            <td>Draft</td>
                            <td>15 Jun 2026</td>
                        </tr>

                        <tr>
                            <td>MongoDB Atlas Setup</td>
                            <td>Published</td>
                            <td>14 Jun 2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Recent Comments */}
            <div className="section">
                <h2>Recent Comments</h2>

                <ul>
                    <li>Ali commented on "Getting Started with MERN"</li>
                    <li>Ahmed commented on "React Router Guide"</li>
                    <li>Sara commented on "MongoDB Atlas Setup"</li>
                </ul>
            </div>

            {/* Quick Actions */}
            <div className="section">
                <h2>Quick Actions</h2>

                <div className="actions">

                    <button>Add New Blog</button>

                    <button>Add Category</button>

                    <button>Manage Users</button>

                </div>
            </div>

        </div>

    );
};

export default Dashboard