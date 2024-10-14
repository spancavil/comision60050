import React, { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ product }) => {
    const [itemCountVisibility, setItemCountVisibility] = useState(true)
    console.log(product)

    const handleCart = (quantity) => {
        console.log(quantity)
        setItemCountVisibility(false)
    }

    return (
        <div>
            <h1>Item detail</h1>
            <img src={product.pictureUrl} style={{ width: 300 }} />
            <h1>{product.title}</h1>
            <span>{product.description}</span>
            {itemCountVisibility ? (
                <ItemCount addCart={handleCart} />
            ) : (
                <button>Go cart</button>
            )}
        </div>
    )
}

export default ItemDetail
