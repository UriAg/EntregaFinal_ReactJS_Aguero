import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import '../css/Checkout.css'
import { collection, addDoc} from 'firebase/firestore';
import { db } from "../firebase/config";

export const Checkout = () =>{
    const {cart, setCart, totalPrice, purchaseOrderId, setPurchaseOrderId} = useContext(CartContext);
    const {register, handleSubmit} = useForm();
    const navigation = useNavigate();

    useEffect(()=>{
        localStorage.setItem('salesIds', JSON.stringify(purchaseOrderId));
    }, [purchaseOrderId])

    const buy = (data) => {
        let PurchaseDate = new Date();
        let PurchaseFormattedDate = PurchaseDate.toLocaleDateString('es-AR')
       const order = {
        cliente: data,
        date: PurchaseFormattedDate,
        productos: cart,
        total: totalPrice()
       }
       const orderRef = collection(db,"sales");
       addDoc(orderRef, order)
       .then((doc)=>{
            setPurchaseOrderId([...purchaseOrderId, doc.id]);
            setCart([]);
            navigation('/successfulpurchase')
        })
    }

  return(
    <div className="container">
        {
            cart.length > 0 ?
            <form className="contact-form-container"  onSubmit={handleSubmit(buy)}>
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
                        REFERENCIAS
                    </label>
                </div>
                <textarea id="userMessage" cols="30" rows="10" {...register("reference")}></textarea>
                <div className='submit-btn'>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            :
            <div>
                <h1>¡Selecciona elementos para realizar la compra!</h1>
            </div>
        }
    </div>
  )
}