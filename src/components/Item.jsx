import "../css/Item.css"
import { Link } from 'react-router-dom';

//Item component - ItemList.jsx
export const Item = ({product}) =>{

  return (
    <Link to={`/item/${product.id}`} style={{maxWidth:"25em"}}>
      <div className="card" id={product.id}>
          <img src={product.image_url} className="card-img-top" alt={`${product.name}"'s "`}/>
          <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5>${product.price}</h5>
          </div>
      </div>
    </Link>
  )
}
