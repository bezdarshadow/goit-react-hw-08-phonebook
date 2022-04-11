import { NavLink } from "react-router-dom";

import styles from "./navbar-menu.module.css";

import {items} from "./items";

const getActiveClass = ({isActive})=> isActive ? styles.linkActive : styles.link;

const NavbarMenu = ({isLogin}) => {
    const fiteredItems = isLogin ? items : items.filter(item => !item.private);
    const elements = fiteredItems.map(({id, to, text})=> (
        <li key={id}>
        <NavLink to={to} className={getActiveClass}>
            {text}
        </NavLink>
    </li>
    ));

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default NavbarMenu;