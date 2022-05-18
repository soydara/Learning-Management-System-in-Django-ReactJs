import React from 'react'
import {Link} from "react-router-dom";

function Course() {
    return (
        <div className="container mt-5">
            <h3 className="pb-1 mb-4 text-start">
                Latest Course
            </h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/detail/1">
                            <img src="logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/course/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/detail/1">
                            <img src="logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/course/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/detail/1">
                            <img src="logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/course/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/detail/1">
                            <img src="logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/course/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Course