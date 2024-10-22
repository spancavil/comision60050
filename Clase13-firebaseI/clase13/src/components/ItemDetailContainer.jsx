import React, { useEffect, useState } from "react"
import products from "../assets/mockData.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {id} = useParams()

    useEffect(() => {

        (async ()=> {

            try {
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setProduct({...docSnap.data(), id})
                } else {
                // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
                
            } catch (error) {
                
            }
        })()

        /* const productFound = products.find(product => product.id === Number(id))
        setProduct(productFound) */
    }, [id])

    return product && <ItemDetail product={product}/>
}

export default ItemDetailContainer
