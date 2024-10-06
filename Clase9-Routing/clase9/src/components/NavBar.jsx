import React from "react"
import styles from "../styles/navbar.module.scss"

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <a className={styles.notActive} href="#contact">
                        Home
                    </a>
                </li>
                <li>
                    <a className={styles.notActive} href="#contact">
                        Products
                    </a>
                </li>
                <li>
                    <a className={styles.notActive} href="#contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a className={styles.notActive} href="#about">
                        About
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
