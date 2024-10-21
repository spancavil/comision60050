import React, { useContext } from "react"
import { Cart as CartContext } from "../context/CartProvider"
import CartItem from "./CartItem"
import styles from "../styles/cart.module.scss"
import { NavLink } from "react-router-dom"

const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log({ cart })
    return (
        <div className={styles.container}>
            {cart.length ? (
                cart.map((cartItem) => {
                    return <CartItem item={cartItem} key={cartItem.id} />
                })
            ) : (
                <>
                    <h1>No hay productos en el cart</h1>
                    <NavLink to={"/"}>Home</NavLink>
                </>
            )}
        </div>
    )
}

export default Cart
