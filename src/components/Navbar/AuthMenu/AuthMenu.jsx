import { NavLink } from "react-router-dom";
import styles from './auth-menu.module.css'

const getActiveClass = ({isActive})=> isActive ? styles.linkActive : styles.link;

const AuthMenu = ()=> {
    return (
        <div className={styles.menu}>
            <NavLink className={getActiveClass} to="/signup">Register</NavLink>
            <NavLink className={getActiveClass} to="/login">Login</NavLink>
        </div>
    )
};

export default AuthMenu;