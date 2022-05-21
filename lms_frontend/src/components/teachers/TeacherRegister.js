import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/teacher/';

function TeacherRegister() {
    const [teacherData, setteacherData] = useState({
       'full_name' : '',
       'email' : '',
       'password' : '',
       'qualification' : '',
       'mobile_no' : '',
       'address' : ''
    });
    // Change Element Value
    const handleChange = (event)=>{
        setteacherData({
           ...teacherData,
           [event.target.name]:event.target.value
        });
    }

    // Submit Form
    const submitForm=()=>{
        const teacherFormData = new FormData();
        teacherFormData.append('full_name', teacherData.full_name)
        teacherFormData.append('email', teacherData.email)
        teacherFormData.append('password', teacherData.password)
        teacherFormData.append('qualification', teacherData.qualification)
        teacherFormData.append('mobile_no', teacherData.mobile_no)
        teacherFormData.append('address', teacherData.address)

        try{
            axios.post(baseUrl,teacherFormData).then((response)=>{
               console.log(response.data);
            });
        }catch (error){
            console.log(error);
        }
    };

    useEffect(()=>{
       document.title = 'Teacher Register';
    });
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
                                    <input type="text" onChange={handleChange} className="form-control" name="full_name" id="full_name"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" onChange={handleChange} className="form-control" name="email" id="email"/>
                                </div>
                                 <div className="mb-3 text-start">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" onChange={handleChange} className="form-control" name="password" id="password"/>
                                </div>
                                 <div className="mb-3 text-start">
                                    <label htmlFor="qualification" className="form-label">Qualification</label>
                                    <input type="text" onChange={handleChange} className="form-control" name="qualification" id="qualification"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="mobile_no" className="form-label">Mobile</label>
                                    <input type="number" onChange={handleChange} className="form-control" name="mobile_no" id="mobile_no"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <textarea onChange={handleChange} className="form-control" rows="4" name="address" id="address"/>
                                </div>
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister