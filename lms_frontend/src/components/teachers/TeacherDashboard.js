import React from 'react'
import TeacherSidebar from "./TeacherSidebar";

function TeacherDashboard() {
    return (
        <div className="container text-start mt-5">
            <div className="row">
                <div className="col-3">
                    <TeacherSidebar />
                </div>
                <div className="col-9">
                    Dashboard
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard