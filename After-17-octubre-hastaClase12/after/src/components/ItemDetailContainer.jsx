import React, { useEffect, useState } from "react"
import products from "../assets/mockData.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const productFound = products.find(product => product.id === Number(id))
        setProduct(productFound)
    }, [id])

    return product && <ItemDetail product={product}/>
}

export default ItemDetailContainer
