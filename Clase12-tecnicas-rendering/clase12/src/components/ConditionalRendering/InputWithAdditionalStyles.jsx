import React, { useState } from "react"
import styles from "../../styles/inputWithAdditionalStyles.module.scss"
/**
 * Custom input. Can pass additional styles
 * @param {{additionalStyles: object, label: string}} {additionalStyles, label}: optional additional styles for input and label
 */

const InputWithAdditionalStyles = ({
    additionalStyles = {},
    label = "label",
}) => {
    const [input, setInput] = useState("")
    return (
        <div className={styles.main}>
            <label for={label}>{label}</label>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ ...additionalStyles }}
            />
        </div>
    )
}

export default InputWithAdditionalStyles
