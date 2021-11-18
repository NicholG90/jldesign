import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import styles from "./navbar.module.css"
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Facebook } from "./assets/facebook.svg";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin.svg";





function Navbar ({childToParent}){
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
        childToParent()
    };

    const closeMobile = () => {
        childToParent(false)
        setClick(false)
    }

    let activeStyle = {
        color: "#111111"
    };

    return (
        <div className={styles.header} id="header">
        <h1 className={styles.logo}>John Lucente</h1>
        <ul className={click ? styles.navListActive : styles.navList}>
            <ul className={styles.internalNav}>
            <li className={styles.navItem} onClick={closeMobile}>
                <NavLink to="/"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
                >
                Work
                </NavLink>
            </li>
            <li className={styles.navItem} onClick={closeMobile}>
                <NavLink to="/contact"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    >
                    Contact
                    </NavLink>
            </li>
            </ul>
            <ul className={styles.socialList}>
            <li className={styles.navItem}>
                <a href="https://www.linkedin.com/in/lucentejohn/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className={styles.socialSVG} />
                </a>    
            </li>
            <li className={styles.navItem}>
                <a href="https://www.instagram.com/john.lucente.design/" target="_blank" rel="noopener noreferrer">
                    <Instagram className={styles.socialSVG} />
                </a>    
            </li>
            <li className={styles.navItemLast}>
                <a href="https://www.facebook.com/JohnPLucente/" target="_blank" rel="noopener noreferrer">
                    <Facebook className={styles.socialSVG} />
                </a>
            </li>
            </ul>
        </ul>
        <div onClick={handleClick} className={styles.menuIcon}>
                {click ? (
                <CloseMenu />
                ) : (
                <MenuIcon />
                )}
        </div>
        </div>
    )

}

export default Navbar;