import { useState, useEffect, useContext } from "react"
import { ItemList } from "./ItemList"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { CartContext } from "../context/CartContext"

export const Sales = () =>{
  const {purchaseOrderId} = useContext(CartContext);
  const [purchasedProducts, setPurchasedProducts] = useState([])

  useEffect(()=>{
    const productsRef = collection(db, 'sales');
    getDocs(productsRef).then((resp) =>{

        let arrayDesordenado = resp.docs.map((doc)=>{
          return {...doc.data(), id: doc.id}
        })

        // console.log(arrayDesordenado)

        const arrayOrdenado = arrayDesordenado.slice().sort((a, b) => {
          const fechaA = new Date(a.date.split('/').reverse().join('-'));
          const fechaB = new Date(b.date.split('/').reverse().join('-'));
          return fechaB - fechaA;
        });

        // console.log(arrayOrdenado)
     
        setPurchasedProducts(arrayOrdenado);
    })
  }, [purchaseOrderId])


  return (
    <main>
      {
        purchasedProducts.length >= 1 ?
        purchasedProducts.map((user)=>{
          return(
            <div key={user.id}>
              <ItemList productsData={user.productos} title={user.date} rol={"Sales"}/>
            </div>
          )
        }):
        <div>
            <h1>¡Cuando realices una compra se verá aquí!</h1>
        </div>
      }
    </main>
  )
}
