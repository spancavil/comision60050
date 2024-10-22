import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import mockProducts from "../assets/mockData.json"
import { db } from "../firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore"

//Logica para traer los productos. Promise, setTimeout etc.
const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    //{categoryId: "electronics"}
    const { categoryId } = useParams()

    useEffect(() => {
        ;(async () => {
            try {
                let productsFiltered = []

                if (categoryId) {
                    const q = query(
                        collection(db, "products"),
                        where("category", "==", categoryId)
                    )

                    const querySnapshot = await getDocs(q)
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data())
                        productsFiltered.push({ id: doc.id, ...doc.data() })
                    })
                } else {
                    const querySnapshot = await getDocs(
                        collection(db, "products")
                    )
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`)
                        productsFiltered.push({ id: doc.id, ...doc.data() })
                    })
                }
                setProducts(productsFiltered)
            } catch (error) {
                console.log(error)
            }
        })()
        /* if (categoryId) {
            productsFiltered = mockProducts.filter(
                (product) => product.category === categoryId
            )
        } else {
            productsFiltered = mockProducts
        } */
        // setProducts(productsFiltered)
    }, [categoryId])

    /* useEffect(()=> {
        (async ()=> {
            await saveJSONToFirebase()
        })()
    },[]) */

    return <ItemList products={products} />
}

export default ItemListContainer
