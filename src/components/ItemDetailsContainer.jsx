import ItemDetails from "./ItemDetails"
import data from "../mock-data.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Componente contenedor de información individual
export const ItemDetailsContainer = () =>{

  
  const [item, setItem] = useState(null);
  const productId = Number(useParams().id);

    //Definición de promesa, busca el id en en el array, si lo encuentra lo almacena
    const detailsPromise = (itemId) =>{
        return new Promise((resolve, reject)=>{
          const selectedItem = data.find((element)=> element.product_id === itemId);
          selectedItem ? resolve(selectedItem) : reject({error:"Error, item no encontrado"});
        });
    };

    //Se usa la promesa cada vez que se actualiza productId (parametro id para BrowserRouter)
    useEffect(()=>{
      detailsPromise(productId)
      .then((data)=>{
        setItem(data);
      });
    }, [productId])

    

    return (
      <div>
        {
          // Si se valida la promise se muestra el producto
          item && <ItemDetails product={item}/>
        }
      </div>
    );
}