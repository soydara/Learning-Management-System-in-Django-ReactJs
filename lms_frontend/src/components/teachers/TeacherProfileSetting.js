import React from 'react'
import {Link} from "react-router-dom";
import Sidebar from "./TeacherSidebar";

function TeacherProfileSetting() {
    return (
        <div className="container text-start mt-5">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-header">
                            Your Profile:
                        </div>
                        <div className="card-body">
                            <form action="#" method="POST">
                            <div className="mb-3 text-start">
                                    <label htmlFor="full_name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" name="full_name" id="full_name"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="email"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" name="username" id="username"/>
                                </div>
                                 <div className="mb-3 text-start">
                                    <label htmlFor="photo" className="form-label">Profile Photo</label>
                                    <input type="file" className="form-control" name="photo" id="photo"/>
                                </div>
                                 <div className="mb-3 text-start">
                                    <label htmlFor="interest" className="form-label">Interest</label>
                                    <input type="text" className="form-control" name="interest" id="interest"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="password" className="form-label">Description</label>
                                    <textarea className="form-control" rows="4">

                                    </textarea>
                                </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherProfileSetting