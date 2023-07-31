import { useContext } from "react";
import { Counter } from "./Counter"
import { CartContext } from "../context/CartContext";

//Show information of an individual item - ItemDetailsContainer.jsx
function ItemDetails( {product} ){
  const {addProduct} = useContext(CartContext);

  //Add to cart function, defined at CartContext.jsx
  const onAdd = (quantity, productoEnBase) =>{
    addProduct(product, quantity, productoEnBase);
  }

  return (
    <div className="card" id={product.id}>
        <img src={product.image_url} className="card-img-top" alt={`${product.name}"'s"`}/>
        <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.description}</p>
            <h5>${product.price}</h5>
            <Counter onAdd={onAdd} product={product}/>
        </div>
    </div>
  )
}

export default ItemDetails;