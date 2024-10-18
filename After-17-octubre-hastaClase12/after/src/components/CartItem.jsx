import React from "react"
import styles from "../styles/cartItem.module.scss"

const CartItem = ({ item }) => {
    return (
        <div className={styles.cartItem} >
            <img src={item.pictureUrl} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button>Delete</button>
        </div>
    )
}

export default CartItem
