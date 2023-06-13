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
import InstructorsClasses from "../Pages/Instructors/InstructorsClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([

    // main layout
    {
        path: "/",
        element: <Main></Main>,
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
                path: "classes",
                element: <PrivateRoutes><Classes></Classes></PrivateRoutes>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "/instructor/:email",
                loader: async ({ params }) => fetch(`http://localhost:5000/instructor/${params?.email}`),
                element: <InstructorsClasses></InstructorsClasses>,
            },

        ]

    },
    {
        path: "errorPage",
        element: <ErrorPage></ErrorPage>
    },

    // dashbord layout
    {
        path: "dashbord",
        element: <Dashbord></Dashbord>,
        children: [
            // student dashbord
            {
                path: "mySelectedClass",
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: "myEnrolledClass",
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            // instructor dashbord
            {
                path: "addClass",
                element: <AddClasses></AddClasses>
            },
            {
                path: "myClasses",
                element: <MyClasses></MyClasses>
            },

            // admin dashbord
            {
                path: "manageClasses",
                element: <ManageClasses></ManageClasses>
            },
            {
                path: "manageUsers",
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
])