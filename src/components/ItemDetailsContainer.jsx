import ItemDetails from "./ItemDetails"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

//Container of individual product info
export const ItemDetailsContainer = () =>{

  
  const [item, setItem] = useState(null);
  const productId = useParams().id;

    useEffect(()=>{
      const docRef = doc(db, 'products', productId );
      getDoc(docRef)
      .then((resp) =>{
         setItem(
          {...resp.data(), id: resp.id}
         )
      })
    }, [productId])

    

    return (
      <div>
        {
          item && <ItemDetails product={item}/>
        }
      </div>
    );
}