import React from 'react'

function TeacherLogin() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">User Login</h5>
                        <div className="card-body">
                             <form action="#" method="POST">
                                <div className="mb-3 text-start">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" id="password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default TeacherLogin