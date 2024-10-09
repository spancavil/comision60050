import React, { useEffect, useState } from "react"
import mockProducts from "../assets/mockData.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

//Logica para traer los productos. Promise, setTimeout etc.
const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    //{categoryId: "electronics"}
    const { categoryId } = useParams()

    useEffect(() => {
        const promise1 = new Promise((res, rej) => {
            setTimeout(() => {
                res(mockProducts)
            }, 2000)
        })

        try {
            const getProducts = async () => {
                setLoading(true)
                const products = await promise1
                let productsFiltered
                if (categoryId) {
                    productsFiltered = products.filter(
                        (product) => product.category === categoryId
                    )
                } else {
                    productsFiltered = products
                }
                setProducts(productsFiltered)
                setLoading(false)
            }

            getProducts()
        } catch (error) {
            //handle error
        }

        /* promise1
            .then((products) => {
                let productsFiltered
                if (categoryId) {
                    productsFiltered = mockProducts.filter(
                        (product) => product.category === categoryId
                    )
                } else {
                    productsFiltered = mockProducts
                }
                setProducts(productsFiltered)
            })
            .catch((error) => console.log(error)) */
    }, [categoryId])

    useEffect(() => {
        console.log("Este side effect se ejecuta en el montaje del componente")

        return () => {
            console.log("Aca se va a desmontar el componente!")
        }
    }, [])

    //La data es generada con mockaroo}
    //{
    //     "id": 1,
    //     "title": "Oppo N1",
    //     "description": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
    //     "price": 49.4,
    //     "pictureUrl": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    // },

    //falta generar la promise con el retraso de 2 seg
    console.log(products)

    return loading ?
        <h1>Loading.. </h1> :
        <ItemList products={products} />
}

export default ItemListContainer
