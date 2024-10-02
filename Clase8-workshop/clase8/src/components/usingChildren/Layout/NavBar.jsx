import React from "react"
import styles from "../../../styles/navbar.module.scss"

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <a class="active" href="#home">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#news">News</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
