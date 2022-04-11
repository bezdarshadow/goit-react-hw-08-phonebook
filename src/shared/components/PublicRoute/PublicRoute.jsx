import { Navigate, Outlet } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import { getIslogin } from "../../../redux/auth/auth-selectors";


const PublicRoute = ()=> {
    const isLogin = useSelector(getIslogin, shallowEqual);

    if(isLogin) {
        return <Navigate to="/contacts" />
    }
    return <Outlet />
};

export default PublicRoute;