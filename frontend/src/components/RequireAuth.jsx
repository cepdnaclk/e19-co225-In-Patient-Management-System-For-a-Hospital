import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "./hooks/UseAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = UseAuth();
    const location = useLocation();

    return (
        (auth.roles == allowedRoles)
            ? <Outlet />
            : auth?.username
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;