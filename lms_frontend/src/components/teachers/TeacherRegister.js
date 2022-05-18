import React from 'react'

function TeacherRegister() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
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
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" id="password"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="password" className="form-label">Description</label>
                                    <textarea className="form-control" rows="4">

                                    </textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister