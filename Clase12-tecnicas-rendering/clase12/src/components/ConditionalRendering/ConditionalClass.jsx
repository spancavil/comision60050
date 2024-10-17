import React from "react"
import styles from "../../styles/conditionalClass.module.scss"

const ConditionalClass = ({ condition = true }) => {
    return (
        <button
            className={`${styles.main} ${
                condition ? styles.sucess : styles.error
            }`}
        >
            Conditional Class
        </button>
    )
}

export default ConditionalClass
