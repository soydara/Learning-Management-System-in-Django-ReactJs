import React from 'react'
import {Link} from "react-router-dom";

function TeacherSidebar() {
    return (
        <div className="card">
            <div className="card-header">
                Teacher Menu Navigation:
            </div>
            <div className="card-body">
                <ul className="list-group text-start">
                    <li className="list-group-item">
                        <Link to="/teacher/dashboard">Dashboard</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/teacher/my-courses">My Course</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/teacher/add-courses">Add Course</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/teacher/my-users">My Users</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/teacher/profile-setting">Profile Setting</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/teacher/change-password">Change Password</Link>
                    </li>
                    <li className="list-group-item text-danger">
                        <Link to="/teacher/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TeacherSidebar