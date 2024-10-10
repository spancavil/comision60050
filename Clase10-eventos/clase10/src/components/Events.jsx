import React, { useState, useEffect } from "react"
import styles from "../styles/events.module.scss"
import ItemCount from "./ItemCount"

const Events = () => {
    const [inputName, setInputName] = useState("")
    const [inputDni, setInputDni] = useState(0)
    //const [form, setForm] = useState ( {name: "", dni: 0})
    
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(()=> {

        const handleEscapeModal = (e) => {
            console.log(e.key)
            if (e.key === "Escape") {
                console.log("Will disable modal");
                
                setModalVisible(false)
            }
        }

        window.addEventListener("keydown", handleEscapeModal)

        //Se ejecuta cuando se desmonta el component
        return () => {
            console.log("se desmonta Events");
            window.removeEventListener("keydown", handleEscapeModal)
        }


    },[])


    const handleClick = (event) => {
        console.log(event)
    }

    console.log(inputName)

    const handleSubmit = (event) => {
        event.preventDefault()
        //Acceder al name del input
        console.log(inputName)
        setInputName("")
    }

    return (
        <>
            <div>
                <h1>Events</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Nombre..."
                        type="text"
                        alt="name-input"
                        value={inputName}
                        onChange={(event) => setInputName(event.target.value)}
                    />
                    <input
                        placeholder="DNI..."
                        type="number"
                        alt="dni-input"
                        value={inputDni}
                        onChange={(event) => setInputDni(event.target.value)}
                    />
                    <button onClick={handleClick} type="submit">
                        Click me!
                    </button>
                </form>
                <button onClick={() => setModalVisible(true)}>
                    Open modal
                </button>
            </div>
            {modalVisible && (
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <h1>Modal content</h1>
                        <button onClick={() => setModalVisible(false)}>
                            Close modal
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Events
