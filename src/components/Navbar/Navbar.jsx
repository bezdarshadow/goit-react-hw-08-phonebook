import { useSelector, shallowEqual } from "react-redux";
import NavbarMenu from "./NavbarMenu"
import AuthMenu from "./AuthMenu"
import UserInfo from "./UserInfo";

import { getIslogin } from "../../redux/auth/auth-selectors";

import styles from './navbar.module.css'

const Navbar = () => {
    const isLogin = useSelector(getIslogin, shallowEqual);

    return(
        <nav className={styles.navbar}>
        <div className="container">
            <div className={styles.row}>
                <NavbarMenu isLogin={isLogin}/>
                {isLogin ? <UserInfo/> : <AuthMenu/> }
            </div>
        </div>
    </nav>
    )
}

export default Navbar;