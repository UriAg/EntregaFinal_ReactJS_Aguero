import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContent = JSON.parse(localStorage.getItem('cart')) || [];
const purchaseOrderIdContent = JSON.parse(localStorage.getItem('salesIds')) || [];

export const CartProvider = ( {children} ) =>{
    //Define cart state, empty array default
    const [cart, setCart] = useState(CartContent)
    const [purchaseOrderId, setPurchaseOrderId] = useState(purchaseOrderIdContent)
    
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    //Add product on cart - ItemDetails.jsx 
    const addProduct = (product, quantity, productoEnBase) =>{
        const addProduct = {...product, quantity};
        const productsArray = [...cart];
        // const selectedItemOnDataBase = data.find((element)=> element.product_id === product.product_id);
        const productOnCart = productsArray.find((el)=>el.id === addProduct.id);

        if(productOnCart){
        (productOnCart.quantity + quantity) >= productoEnBase.stock ?
        productOnCart.quantity = productoEnBase.stock :
        productOnCart.quantity += quantity 
        }else{
        productsArray.push(addProduct);
        }
        setCart(productsArray);
    }

    //Number of products on cart - Cartwidget.jsx
    const nbrCartProducts = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    //Round quantity products depending stock - Counter.jsx, CartCounter.jsx
    const roundQuantity = (minimum, quantity, cantidad) =>{
        return Math.max(minimum, Math.min(quantity, Math.round(cantidad / minimum) * minimum));
    }

    //Calculate the total price of the products in cart - CartWidget.jsx
    const totalPrice = () =>{
        return new Intl.NumberFormat('es-AR').format(Number.parseFloat(cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)).toFixed(2)); 
    }

    return(
        <CartContext.Provider value={ {
            cart,
            setCart,
            purchaseOrderId,
            setPurchaseOrderId,
            addProduct,
            nbrCartProducts,
            roundQuantity,
            totalPrice} 
            }>
            {children}
        </CartContext.Provider>
    )
}