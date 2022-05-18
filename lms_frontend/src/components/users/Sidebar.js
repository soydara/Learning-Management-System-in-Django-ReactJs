import React from 'react'
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div className="card">
            <div className="card-header">
                User Menu Navigation:
            </div>
            <div className="card-body">
                <ul className="list-group text-start">
                    <li className="list-group-item">
                        <Link to="/user/dashboard">Dashboard</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/my-courses">My Course</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/favorite-courses">Favorite Course</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/recommended-courses">Recommended Course</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/profile-setting">Profile Setting</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/change-password">Change Password</Link>
                    </li>
                    <li className="list-group-item text-danger">
                        <Link to="/user/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar