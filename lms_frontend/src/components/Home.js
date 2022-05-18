import React from 'react'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="container mt-4">
                {/* Latest Course*/}
                <h3 className="pb-1 mb-4 text-start">
                    Latest Course <Link to="course" className="float-end">See All</Link>
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
                {/* Popular Course*/}
                <h3 className="pb-1 mb-4 mt-5 text-start">
                    Popular Course <Link to="/popular/course" className="float-end">See All</Link>
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
                                <div className="card-footer">
                                    <div className="title text-start">
                                        <span>Ratting: 4.5/5</span>
                                        <span className="float-end">View: 485894</span>
                                    </div>
                                </div>
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
                                <div className="card-footer">
                                    <div className="title text-start">
                                        <span>Ratting: 4.5/5</span>
                                        <span className="float-end">View: 485894</span>
                                    </div>
                                </div>
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
                                <div className="card-footer">
                                    <div className="title text-start">
                                        <span>Ratting: 4.5/5</span>
                                        <span className="float-end">View: 485894</span>
                                    </div>
                                </div>
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
                                <div className="card-footer">
                                    <div className="title text-start">
                                        <span>Ratting: 4.5/5</span>
                                        <span className="float-end">View: 485894</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Popular Teacher*/}
                <h3 className="pb-1 mb-4 mt-5 text-start">
                    Popular Teacher <Link to="/popular/teacher" className="float-end">See All</Link>
                </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="teacher/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="teacher/detail/1">
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
                            <Link to="teacher/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="teacher/detail/1">
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
                            <Link to="teacher/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="teacher/detail/1">
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
                            <Link to="teacher/detail/1">
                                <img src="/logo512.png" className="card-img-top" alt="Photo"/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="teacher/detail/1">
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
                {/* Student Testimonial*/}
                <h3 className="pb-1 mb-4 mt-5 text-start">
                    Student Testimonial
                </h3>
                <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5"
                     data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1">

                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2">

                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3">

                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <figure>
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure>
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure>
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">

                    </span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">

                    </span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home