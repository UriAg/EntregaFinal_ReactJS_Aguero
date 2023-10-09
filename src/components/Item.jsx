import "../css/Item.css"
import { Link } from 'react-router-dom';

//Item component - ItemList.jsx
export const Item = ({product, rol}) =>{

  return (
    <Link to={`/item/${product.id}`} className="item-link" style={{maxWidth:"25em"}}>
      <div className="card" id={product.id}>
          
          <img src={product.image_url} className="card-img-top" alt={`${product.name}"'s "`}/>
          <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5>${product.price}</h5>
              {
                rol === "Sales" &&
                <span>{product.quantity} unidades</span>
              }
          </div>
      </div>
    </Link>
  )
}
