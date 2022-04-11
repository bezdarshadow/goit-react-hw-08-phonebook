import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {logout} from "../../../redux/auth/auth-operations";

import { getUser } from "../../../redux/auth/auth-selectors";

const UserInfo = ()=> {
    const {name} = useSelector(getUser, shallowEqual);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = ()=> {
        navigate('/')
       dispatch(logout());
    }

    return (
        <div>
            {name}, <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default UserInfo;