import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashbord from "../LayOuts/Dashbord";
import MySelectedClass from "../Pages/DashBord/StudentDashbord/MySelectedClass/MySelectedClass";
import MyEnrolledClasses from "../Pages/DashBord/StudentDashbord/MyEnrolledClasses/MyEnrolledClasses";
import AddClasses from "../Pages/DashBord/InstructorDashbord/AddClasses";
import MyClasses from "../Pages/DashBord/InstructorDashbord/MyClasses";
import ManageClasses from "../Pages/DashBord/AdminDashbord/ManageClasses";
import ManageUsers from "../Pages/DashBord/AdminDashbord/ManageUsers";
import LogIn from "../Pages/Authentication/LogIn/LogIn";
import Register from "../Pages/Authentication/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/DashBord/Payment/Payment";
import PaymentHistory from "../Pages/DashBord/StudentDashbord/PaymentHistory/PaymentHistory";
import PrivateRouteLoader from "../components/Loader/PrivateRouteLoader/PrivateRouteLoader";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";



export const router = createBrowserRouter([

    // main layout
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "classPage",
                element: <Classes></Classes>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "register",
                element: <Register></Register>
            },



        ]

    },
    {
        path: "loaderIcon",
        element: <PrivateRouteLoader></PrivateRouteLoader>
    },

    // dashbord layout
    {
        path: "dashbord",
        element: <Dashbord></Dashbord>,
        children: [
            // payment route
            {
                path: "payment/:id",
                loader: async ({ params }) => await fetch(`http://localhost:5000/dashbord/payment/${params.id}`),
                element: <Payment></Payment>
            },
            // student dashbord
            {
                path: "mySelectedClass",
                element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute>
            },
            {
                path: "myEnrolledClass",
                element: <StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
            },
            {
                path: "payMentHistory",
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },
            // instructor dashbord
            {
                path: "addClass",
                element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
            },
            {
                path: "myClasses",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },

            // admin dashbord
            {
                path: "manageClasses",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "manageUsers",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    }
])