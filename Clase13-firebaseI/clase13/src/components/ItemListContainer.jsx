import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import mockProducts from "../assets/mockData.json"

//Logica para traer los productos. Promise, setTimeout etc.
const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    //{categoryId: "electronics"}
    const { categoryId } = useParams()

    useEffect(() => {
        let productsFiltered
        if (categoryId) {
            productsFiltered = mockProducts.filter(
                (product) => product.category === categoryId
            )
        } else {
            productsFiltered = mockProducts
        }
        setProducts(productsFiltered)
    }, [categoryId])

    /* useEffect(()=> {
        (async ()=> {
            await saveJSONToFirebase()
        })()
    },[]) */

    return <ItemList products={products} />
}

export default ItemListContainer
