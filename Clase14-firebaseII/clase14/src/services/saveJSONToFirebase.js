import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import products from '../assets/mockData.json' //Colocamos la ruta donde está ubicado el json.

//NOTA: también se puede hacer algo similar con un bucle dentro de Object.entries (pero ya es nivel un pcoo más avanzado)

const saveJSONToFirebase = async () => {
    try {    
        products.forEach(async (product) => {
            //Adaptar el objeto a las propiedades del producto
            const docRef = await addDoc(collection(db, "products"), {
                title: product.title,
                price: product.price,
                description: product.description,
                pictureUrl: product.pictureUrl,
                stock: product.stock || 10,
                category: product.category,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveJSONToFirebase;