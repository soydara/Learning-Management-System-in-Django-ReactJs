import React from "react";
import {Link, useParams} from 'react-router-dom';

function TeacherDetail() {
    let {teacher_id} = useParams();
    return (
        <div className="container mt-3 text-start">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="card-img-top img-thumbnail" alt="Photo"/>
                </div>
                <div className="col-8">
                    <h3>Teacher Name: Soy Dara {teacher_id}</h3>
                    <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card</p>
                    <p className="fw-bold">Skills: <Link to="#">PHP</Link>,<Link to="#">Python</Link>,<Link to="#">Java</Link></p>
                    <p className="fw-bold">Recent Course: <Link to="#">React JS</Link></p>
                    <p className="fw-bold">Ratting: 4/5</p>
                </div>
            </div>
            <div className="card mt-4">
                <h3 className="card-header">
                    Course List
                </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link to="/course/detail/1">PHP</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/course/detail/1">Python</Link>
                    </li>
                     <li className="list-group-item">
                        <Link to="/course/detail/1">Java</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TeacherDetail;