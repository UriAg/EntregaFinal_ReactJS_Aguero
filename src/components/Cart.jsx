import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { CartCounter } from "./CartCounter";
import { Link } from "react-router-dom";

export const Cart = () => {
  const {cart, setCart} = useContext(CartContext);

  return (
    <div className="container" style={{flexDirection:"column"}}>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              !cart.length ? 
                <tr>
                  <td colSpan={5} className="text-center">
                    <b>
                      Carrito vacío, ¡vayamos a comprar!
                    </b>
                  </td>
                </tr> : 
                cart.map(product=>{
                  return(
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(Number.parseFloat(product.price).toFixed(2))}</td>
                      <td style={{width:"15em"}}><CartCounter product={product} className="justify-content-center"></CartCounter></td>
                      <td className="text-center">{new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(Number.parseFloat(product.price * product.stock).toFixed(2))}</td>
                      <td>
                        <span className="delete-product">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={()=>{setCart(cart.filter(prod => prod !== product))}}>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                        </span>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
      <Link to={'/checkout'}>Finalizar compra </Link>
    </div>
  )
}