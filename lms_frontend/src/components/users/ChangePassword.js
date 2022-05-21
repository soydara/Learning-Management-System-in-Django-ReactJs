import React from 'react'
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

function ChangePassword() {
    return (
        <div className="container text-start mt-5">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-header">
                            Change Password:
                        </div>
                        <div className="card-body">
                            <form action="#" method="POST">
                                <div className="mb-3 text-start">
                                    <label htmlFor="old_password" className="form-label">Old Password</label>
                                    <input type="password" className="form-control" name="old_password" id="old_password"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="new_password" className="form-label">New Password</label>
                                    <input type="password" className="form-control" name="new_password" id="new_password"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" name="confirm_password" id="confirm_password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Change</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword