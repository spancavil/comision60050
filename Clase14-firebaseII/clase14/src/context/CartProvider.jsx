import { createContext, useState } from "react"

//1. Crear el contexto
export const Cart = createContext()

//2. Crear el componente que va a proveer ese contexto <NombreProvider>
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addCart = (product, productQuantity) => {
        //Ojo con hacer push al state. Se hace push a otra variable auxiliar.
        //Los states son inmutables.
        const productInCart = isInCart(product.id)
        console.log(productInCart);
        let cartUpdated = [...cart]
        if (productInCart) {
            cartUpdated = cart.map (cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    }
                }
                return cartProduct
            })
        } else {
            cartUpdated.push({...product, quantity: productQuantity})
        }
        
        setCart(cartUpdated)
        // setQuantity(cartUpdated.length)
    }

    //Devuelve true o false dependiendo si esta o no en el cart
    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId )
    }

    return (
        <Cart.Provider value={{cart, addCart, quantity}}>{children}</Cart.Provider>
    )
}

export default CartProvider
