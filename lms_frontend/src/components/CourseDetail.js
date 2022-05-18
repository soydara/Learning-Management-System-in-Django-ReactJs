import React from "react";
import {Link, useParams} from 'react-router-dom';

function CourseDetail()
{
    let {course_id} = useParams();
    return (
        <div className="container mt-3 text-start">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="card-img-top img-thumbnail" alt="Photo"/>
                </div>
                <div className="col-8">
                    <h3>Course Title {course_id}</h3>
                    <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card</p>
                    <p className="fw-bold">Course By: <Link to="/teacher/detail/1">Teacher 1</Link></p>
                    <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
                    <p className="fw-bold">Total Enrolled 456 Students</p>
                    <p className="fw-bold">Ratting: 4/5</p>
                </div>
            </div>
            <div className="card mt-4">
                <h3 className="card-header">
                    Course Videos
                </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Introduction
                        <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#videoModal1">
                            <i className="bi-youtube"> </i>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Introduction
                        <button className="btn btn-sm btn-danger float-end">
                            <i className="bi-youtube"> </i>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Introduction
                        <button className="btn btn-sm btn-danger float-end">
                            <i className="bi-youtube"> </i>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Introduction
                        <button className="btn btn-sm btn-danger float-end">
                            <i className="bi-youtube"> </i>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Introduction
                        <button className="btn btn-sm btn-danger float-end">
                            <i className="bi-youtube"> </i>
                        </button>
                    </li>
                </ul>
            </div>
            {/*Modal Show Video*/}
            <div className="modal fade" id="videoModal1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Video title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Modal Show Video*/}
            {/* Latest Course*/}
                <h3 className="pb-1 mb-4 text-start mt-5">
                    Related Course
                </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="course/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="course/detail/1">
                                        Course Title
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="course/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="course/detail/1">
                                        Course Title
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="course/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="course/detail/1">
                                        Course Title
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="course/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="course/detail/1">
                                        Course Title
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CourseDetail;