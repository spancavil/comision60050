import React, { useContext } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import styles from '../styles/layout.module.scss'
import { Theme } from "../context/ThemeProvider"

const Layout = ({ children }) => {
    const {theme} = useContext(Theme)
    
    return (
        <>
            <NavBar/>
            <div className = {styles[`main-container-${theme}`]}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout
