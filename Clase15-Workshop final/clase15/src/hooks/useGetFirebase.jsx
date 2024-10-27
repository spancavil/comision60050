import { query, collection, where, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"

/**
 * Hook for fetching data from firebase's firestore
 * @param {{coll: string, category: string, id: string}} coll: firebase collection (i.e. products,), category: the category of the products, id: the id
 * @returns {{loading: boolean, data: any, error: string}} data: the data fetched, loading: boolean, and error: the error message
 */
const useGetFirebase = ({ coll, category = "", id = "" }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {        
        ;(async () => {
            if (coll) {                
                setLoading(true)
                try {
                    let productsFiltered = []
                    let productById
    
                    if (category) {
                        const q = query(
                            collection(db, coll),
                            where("category", "==", category)
                        )
    
                        const querySnapshot = await getDocs(q)
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data())
                            productsFiltered.push({ id: doc.id, ...doc.data() })
                        })
                        setData(productsFiltered)
                    } else {
                        const querySnapshot = await getDocs(collection(db, coll))
                        querySnapshot.forEach((doc) => {
                            console.log(`${doc.id} => ${doc.data()}`)
                            productsFiltered.push({ id: doc.id, ...doc.data() })
                        })
                        setData(productsFiltered)
                    }
                } catch (error) {
                    console.log(error)
                    setError(error.message)
                } finally {
                    setLoading(false)
                }
            }
        })()
    }, [coll, category, id])

    //En lugar de retornar un JSX retorna un objeto con todos los estados
    return { loading, data, error }
}

export default useGetFirebase
