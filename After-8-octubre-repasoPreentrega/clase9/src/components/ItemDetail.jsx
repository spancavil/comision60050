import React from "react"

const ItemDetail = ({ product }) => {
    console.log(product)

    return <div>
        <img src={product.pictureUrl} style={{width: 300}}/>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        {/*Item Count*/}
    </div>
}

export default ItemDetail
