import { useContext, useState } from "react";
import data from "../mock-data.json"
import "../css/Counter.css"
import { CartContext } from "../context/CartContext";

//Counter component to select quantity of units - ItemDetails.jsx
export const Counter = ({onAdd, product}) =>{
    const [count, setCount] = useState(product.minimum);
    const {cart, roundQuantity} = useContext(CartContext); 

    // const product = data.find((element)=> element.id === product.id);
    const productOnCart = cart.find((el)=>el.id === product.id);

    //Add and remove product quantity on cart
    const handleAdd = () =>{
        const newProductQuantity = roundQuantity(product.minimum, product.stock, (count + product.minimum));
        setCount(newProductQuantity);
    }

    const handleRemove = () =>{
        const newProductQuantity = roundQuantity(product.minimum, product.stock, (count - product.minimum));
        setCount(newProductQuantity);
    }

    return(
        <div className="counter-container">
            <div className="counter">
                <button className="minus" disabled={count===product.minimum} onClick={handleRemove}></button>
                <div type="number" className="number">{count}</div>
                <button className="plus" disabled={count===product.stock} onClick={handleAdd}></button>
            </div>
            <div className="add-container">
                <button type="button" className="add-btn" disabled={productOnCart && productOnCart.quantity === product.stock} onClick={() => {onAdd(count, product)}}>Agregar al carrito</button>
            </div>
        </div>
    );
}