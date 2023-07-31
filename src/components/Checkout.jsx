import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useForm } from "react-hook-form";
import '../css/Checkout.css'
import { collection, addDoc} from 'firebase/firestore';
import { db } from "../firebase/config";


function Checkout() {
    const [pedidoId, setPedidoId] = useState("")
    const {cart, setCart, totalPrice} = useContext(CartContext);
    const {register, handleSubmit} = useForm();

    const comprar = (data) => {
       const pedido = {
        cliente: data,
        productos: cart,
        total: totalPrice()
       }
       console.log(pedido)
       const refPedidos = collection(db,"sales");
       addDoc(refPedidos, pedido)
       .then((doc)=>{
            setPedidoId(doc.id);
            setCart([]);
       })
    }

    if(pedidoId){
        return(
            <div className="show-info-container">
                <h1>¡Muchas gracias por tu compra!</h1>
                <h2>El identificador de tu pedido es: {pedidoId}</h2>
            </div>
        )
    }

  return(
    <div className="container">
        <form className="contact-form-container"  onSubmit={handleSubmit(comprar)}>
            <h1>Finalizar compra</h1>
            <div className="label-div">
                <label htmlFor="userName">
                    NOMBRE
                </label>
            </div>
            <input type="text" id="userName" {...register("name")}/>

            <div className="label-div">
                <label htmlFor="userEmail">
                    EMAIL
                </label>
            </div>
            <input type="email" id="userEmail" {...register("email")}/>

            <div className="label-div">
                <label htmlFor="userPhoneNumber">
                    TELÉFONO 
                    <small> (OPCIONAL)</small>
                </label>
            </div>
            <input type="number" id="userPhoneNumber" {...register("phone")}/>

            <div className="label-div">
                <label htmlFor="userMessage">
                    MENSAJE
                </label>
            </div>
            <textarea id="userMessage" cols="30" rows="10" {...register("message")}></textarea>
            <div className='submit-btn'>
                <button type="submit">Enviar</button>
            </div>
        </form>
        </div>
  )
}

export default Checkout