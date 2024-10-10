import React, { useState } from "react"
import ItemCount from "./ItemCount"
import MascaraInput from "./MascaraInput"

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
            <MascaraInput />
            {itemCountVisibility ? (
                <ItemCount addCart={handleCart} />
            ) : (
                <button>Go cart</button>
            )}
        </div>
    )
}

export default ItemDetail
