import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTitle = (baseTitle) => {
    const location = useLocation();

    useEffect(() => {
        const routeTitle = getRouteTitle(location.pathname);
        document.title = `${baseTitle} | ${routeTitle}`;
    }, [location, baseTitle]);
};




const getRouteTitle = (pathname) => {
    switch (pathname) {
        case '/':
            return 'Home';
        case '/register':
            return 'Register';
        case '/login':
            return 'Log In';
        case '/instructors':
            return 'Instructors DashBord';
        case '/classes':
            return 'Populer Classes';
        case '/mySelectedClass':
            return 'My Selected Class';
        case 'myEnrolledClass':
            return 'My Enrolled Classes';
        case 'addClass':
            return 'Add a Class';
        case 'myClasses':
            return 'My Classes';
        case 'manageClasses':
            return 'Manage Classes';
        case 'manageUsers':
            return 'Manage Users';
        default:
            return '';
    }
};