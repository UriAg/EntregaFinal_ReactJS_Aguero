import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useContext } from "react";
import { CartCounter } from "./CartCounter";

//Show icons, cart, login with redirection - Navbar.jsx
export const CartWidget = () =>{

    const {cart, setCart, nbrCartProducts, totalPrice} = useContext(CartContext);

    const topPrevisualizerStyles = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderTop:"1px solid #00000030",
        borderBottom:"1px solid #00000030",
        padding:".3em .5em",
        marginBottom:".5em"
    }

    return(
        <div className="cart-nav">
            <Link to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </Link>
            <div className="cart">
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </a>
                    <span>{nbrCartProducts()}</span>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width:"35em"}}>
                <div className="offcanvas-header" style={{position:"relative", justifyContent:"center"}}>
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Carrito</h5>
                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0 m-0">
                    {
                        cart.length >=1 ?
                        <div className="offcanvas-body-container">
                            <div className="cartItemsPrevisualizer">
                                <div style={topPrevisualizerStyles}>
                                    <h4 className="m-0">Producto</h4>
                                    <h4 className="m-0">Subtotal</h4>
                                </div>
                                {
                                    cart.map((product) =>{
                                        
                                        return(
                                            <div className="previsualizer-item-card" id={product.id} key={product.id}>
                                                <div className="card-container">
                                                    <img src={product.image_url} className="item-img" alt={`${product.name}"'s "`}/>
                                                    <div className="item-card-body">
                                                        <h4 className="item-card-title">{product.name}</h4>
                                                        <h5>${product.price}</h5>
                                                        <CartCounter product={product}/>
                                                    </div>
                                                </div>
                                                <div className="card-product-price">
                                                    <span>${new Intl.NumberFormat('es-AR').format(Number.parseFloat(product.price * product.quantity).toFixed(2))}</span>
                                                </div>
                                                <span className="delete-product">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={()=>{setCart(cart.filter(prod => prod !== product))}}>
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div>
                                <h5 style={{borderTop:" 1px solid rgba(0, 0, 0, 0.19) ", paddingTop:".5em"}}>Total: ${new Intl.NumberFormat('es-AR').format(Number.parseFloat(totalPrice()).toFixed(2))}</h5>
                            </div>
                            <div className="toCartButton">
                                <Link to="/cart">Ir al carrito</Link>
                            </div>
                        </div> :
                            <p style={{textAlign:"center"}}>No hay productos</p>
                    }

                    
                </div>
            </div>
        </div>
    )
}