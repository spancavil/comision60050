import NavBar from "./NavBar"
import Footer from "./Footer"
import styles from "../styles/layout.module.scss"

const Layout = ({ children }) => {
    const theme = "light"

    return (
        <>
            <NavBar />
            <div className={styles[`main-container-${theme}`]}>{children}</div>
            <Footer />
        </>
    )
}

export default Layout
