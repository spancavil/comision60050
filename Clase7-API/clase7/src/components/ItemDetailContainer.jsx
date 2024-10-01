import React, { useEffect, useState } from "react"
import products from "../assets/mockData.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        setProduct(products[0])
    }, [])

    return <ItemDetail product={product}/>
}

export default ItemDetailContainer
