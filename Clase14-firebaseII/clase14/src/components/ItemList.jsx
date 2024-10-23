import React from "react"
import Item from "./Item"
import styles from '../styles/itemlist.module.scss'

//En este componente hacemos el mappeo de los products y devolvemos un Item por cada product
const ItemList = ({ products }) => {
    return (
        <div className={styles.container}>
            {products.map((product) => {
                return (
                    <Item item={product} key={product.id}/>
                )
            })}
        </div>
    )
}

export default ItemList
