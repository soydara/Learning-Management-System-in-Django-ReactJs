import React from 'react';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function PopularTeacher() {
    const [teacher, setTeacher] = useState(null);
    useEffect(() => {
        axios.get(baseUrl+'/teacher/').then((response) => {
           console.log(response.data);
        });
    },[]);
    return (
        <div className="container mt-5">
            <h3 className="pb-1 mb-4 text-start">
                Popular Teacher
            </h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher/detail/1">
                            <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                            <div className="card-footer">
                                <div className="title text-start">
                                    <span>Ratting: 4.5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher/detail/1">
                            <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                            <div className="card-footer">
                                <div className="title text-start">
                                    <span>Ratting: 4.5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher/detail/1">
                            <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                            <div className="card-footer">
                                <div className="title text-start">
                                    <span>Ratting: 4.5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher/detail/1">
                            <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher/detail/1">
                                    Course Title
                                </Link>
                            </h5>
                            <div className="card-footer">
                                <div className="title text-start">
                                    <span>Ratting: 4.5/5</span>
                                </div>
                            </div>
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

export default PopularTeacher