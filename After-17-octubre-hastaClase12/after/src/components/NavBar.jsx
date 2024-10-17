import React, { useContext, useState } from "react"
import styles from "../styles/navbar.module.scss"
import { NavLink } from "react-router-dom"
import Switch from "./Switch"
import { Theme } from "../context/ThemeProvider"

const NavBar = () => {

    //Consumir el contexto Theme
    const {dark, setDark} = useContext(Theme)

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/"}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/category/jewelery"}
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/category/electronics"}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <Switch checked={dark} setChecked={setDark}/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
