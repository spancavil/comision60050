import React, { useState } from "react"
import styles from "../styles/itemcount.module.scss"

//addCart es una funcion
const ItemCount = ({addCart}) => {
    const [count, setCount] = useState(0)
    //Add count logic
    return (
        <div className={styles.container}>
            <div className={styles.operators}>
                <button>-</button>
                <span>{count}</span>
                <button>+</button>
            </div>
            <button className={styles.addcart} onClick={()=>addCart(count)}>Add cart</button>
        </div>
    )
}

export default ItemCount
