import { useContext, useEffect, useState } from "react";
import "../css/Counter.css"
import data from "../mock-data.json"
import { CartContext } from "../context/CartContext";

//Counter component to select quantity of units - CartWidget.jsx
export const CartCounter = ({product, className=""}) =>{
    const {cart, setCart, roundQuantity} = useContext(CartContext);
    const [count, setCount] = useState(0);

    // const product = data.find((element)=> element.id === product.id);
    const productOnCart = cart.find((el)=>el.id === product.id);
    
    useEffect(()=>{
        setCount(product.quantity);
    }, [cart])

    //Add and remove product quantity on cart
    const handleAdd = () =>{
        const newProductQuantity = roundQuantity(product.minimum, product.stock, (productOnCart.quantity + product.minimum));
        setCount(newProductQuantity);
        
        const productsArray = [...cart];
        productOnCart.quantity = newProductQuantity;
        setCart(productsArray);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const handleRemove = () =>{
        const newProductQuantity = roundQuantity(product.minimum, product.stock, (productOnCart.quantity - product.minimum));
        setCount(newProductQuantity);
        
        const productsArray = [...cart];
        productOnCart.quantity = newProductQuantity;
        setCart(productsArray);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return(
        <div className={`counter-container ${className}`}>
            <div className="counter" style={{width:"50%"}}>
                <button className="minus" disabled={count===product.minimum} onClick={handleRemove}></button>
                <input className="number" disabled value={count} style={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "1.25em",
                        fontWeight: "100",
                        background: "none",
                        border: "none",
                }}/>
                <button className="plus" disabled={count===product.stock} onClick={handleAdd}></button>
            </div>
        </div>
    );
}