import React, { useState, useEffect } from "react"
import styles from "../styles/events.module.scss"
import ItemCount from "./ItemCount"

const Events = () => {
    // const [modalVisible, setModalVisible] = useState(false)

    /* useEffect(() => {
        const keydownCallback = (e) => {
            console.log(e.key)
            if (e.key === "Escape") {
                console.log("Will disable modal");
                
                setModalVisible(false)
            }
        }

        window.addEventListener("keydown", keydownCallback)

        return () => {
            console.log("will remove event listener!");
            window.removeEventListener("keydown", keydownCallback)
        }
    }, []) */

    return (
        <>
            <div>
                <h1>Events</h1>
                <button>Click me!</button>
                {/* <button onClick={() => setModalVisible(true)}>
                    Open modal
                </button> */}
            </div>
            {/* {modalVisible && (
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <h1>Modal content</h1>
                        <button onClick={() => setModalVisible(false)}>
                            Close modal
                        </button>
                    </div>
                </div>
            )} */}
        </>
    )
}

export default Events
