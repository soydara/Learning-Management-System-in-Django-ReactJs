import React from 'react'
import {Link} from "react-router-dom";
import Sidebar from "./TeacherSidebar";

function TeacherAddCourse() {
    return (
        <div className="container text-start mt-5">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <table className="table table-striped text-bg-light">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Created By</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Python Programming</td>
                            <td>
                                <a href="#">Vatey</a>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TeacherAddCourse