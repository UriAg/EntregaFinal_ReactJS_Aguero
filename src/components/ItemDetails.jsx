import { Counter } from "./Counter"

// Componente renderiza información de un item individual, se utiliza en ItemDetailsContainer
function ItemDetails( {product} ){
  
  //Función retorna cantidad de unidades agregadas al carrito
  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades de ${product.product_name}`);
  }

  return (
    <div className="card" id={product.product_id} value={product.quantity}>
        <img src={product.image_url} className="card-img-top" alt={product.product_name + "'s " + "image"}/>
        <div className="card-body">
            <h4 className="card-title">{product.product_name}</h4>
            <p className="card-text">{product.description}</p>
            <h5>${product.price}</h5>
            <Counter minimum={product.minimum} stock={product.quantity} onAdd={onAdd}/>
            <a href="#" className="btn btn-primary">{"Ver más de "+ product.product_name}</a>
        </div>
    </div>
  )
}

export default ItemDetails;