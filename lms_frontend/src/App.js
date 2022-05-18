// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
// Layout
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
// Front Page
import About from "./components/About";
import Contact from "./components/Contact";
import CourseDetail from "./components/CourseDetail";
import Course from "./components/Course";
import TeacherDetail from "./components/TeacherDetail";
// User Page
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Dashboard from "./components/users/Dashboard";
import MyCourse from "./components/users/MyCourse";
import FavoriteCourse from "./components/users/FavoriteCourse";
import RecommendedCourses from "./components/users/RecommendedCourses";
import ProfileSetting from "./components/users/ProfileSetting";
import ChangePassword from "./components/users/ChangePassword";
// Teacher Page
import TeacherLogin from "./components/teachers/TeacherLogin";
import TeacherRegister from "./components/teachers/TeacherRegister";
import TeacherDashboard from "./components/teachers/TeacherDashboard";
import TeacherMyCourse from "./components/teachers/TeacherMyCourse";
import TeacherAddCourse from "./components/teachers/TeacherAddCourse";
import TeacherMyUserCourses from "./components/teachers/TeacherMyUserCourses";
import TeacherProfileSetting from "./components/teachers/TeacherProfileSetting";
import TeacherChangePassword from "./components/teachers/TeacherChangePassword";
function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                {/*Front Page*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/course" element={<Course/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/course/detail/:course_id" element={<CourseDetail/>}/>
                <Route path="/teacher/detail/:teacher_id" element={<TeacherDetail/>}/>
                {/*User Page*/}
                <Route path="/user/login" element={<Login/>}/>
                <Route path="/user/register" element={<Register/>}/>
                <Route path="/user/dashboard" element={<Dashboard/>}/>
                <Route path="/user/my-courses" element={<MyCourse/>}/>
                <Route path="/user/favorite-courses" element={<FavoriteCourse/>}/>
                <Route path="/user/recommended-courses" element={<RecommendedCourses/>}/>
                <Route path="/user/profile-setting" element={<ProfileSetting/>}/>
                <Route path="/user/change-password" element={<ChangePassword/>}/>
                {/*Teacher Page*/}
                <Route path="/teacher/login" element={<TeacherLogin/>}/>
                <Route path="/teacher/register" element={<TeacherRegister/>}/>
                <Route path="/teacher/dashboard" element={<TeacherDashboard/>}/>
                <Route path="/teacher/my-courses" element={<TeacherMyCourse/>}/>
                <Route path="/teacher/add-courses" element={<TeacherAddCourse/>}/>
                <Route path="/teacher/my-users" element={<TeacherMyUserCourses/>}/>
                <Route path="/teacher/profile-setting" element={<TeacherProfileSetting/>}/>
                <Route path="/teacher/change-password" element={<TeacherChangePassword/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
