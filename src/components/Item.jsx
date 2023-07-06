import "../css/Item.css"
import { Link } from 'react-router-dom';

//Componente renderiza item individual para ItemList
export const Item = ({product}) =>{

  //Función retorna cantidad de unidades agregadas al carrito
  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades`);
  }

  return (
    /* Redirecciona a la ruta dinámica /item/{id de un producto}*/
    <Link to={`/item/${product.product_id}`}>
      <div className="card" id={product.product_id} value={product.quantity}>
          <img src={product.image_url} className="card-img-top" alt={product.product_name + "'s " + "image"}/>
          <div className="card-body">
              <h4 className="card-title">{product.product_name}</h4>
              <h5>${product.price}</h5>
          </div>
      </div>
    </Link>
  )
}
