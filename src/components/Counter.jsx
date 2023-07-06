import { useEffect, useState } from "react";
import "../css/Counter.css"

// Componente contador para seleccionar cantidad de unidades seleccionadas
export const Counter = ({minimum, stock, onAdd}) =>{
    const [count, setCount] = useState(minimum);   

    return(
        <div className="counter-container">
            <div className="counter">
                <button className="minus" disabled={count==minimum} onClick={()=>setCount(count => count > minimum ? count - 1 : count)}></button>
                <div className="number">{count}</div>
                <button className="plus" disabled={count==stock} onClick={()=>setCount(count => count < stock ? count + 1 : count)}></button>
            </div>
            <div className="add-container">
                <button type="button" className="add-btn" disabled={stock <= 0} onClick={() => {onAdd(count)}}>Agregar al carrito</button>
            </div>
        </div>
    );
}