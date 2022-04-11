import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import { getIslogin } from "../../../redux/auth/auth-selectors";


const PrivateRoute = ()=> {
    const isLogin = useSelector(getIslogin, shallowEqual);

    const location = useLocation();

    if(!isLogin) {
        return <Navigate to="/login" state={{from: location}} />
    }
    return <Outlet />
};

export default PrivateRoute;