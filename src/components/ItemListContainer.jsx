import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import jsonProductData from "../mock-data.json"
import { useParams } from "react-router-dom"

//Componente contenedor de los productos
export const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState();
    const category = useParams().category;

    // Función promise, evalúa la "BBDD" en este caso el archivo JSON
    const productPromise = (resolveArray)=>{ 
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(resolveArray);
            }, 2000);
        });
    }

    //Se almacena en "products" la categoría seleccionada cada vez que se actualiza "category"
    //"category" (URL param para uso dinámico '/products/:category')
    useEffect(()=>{
        productPromise(jsonProductData)
        .then((resp) => resp)
        .then((data) =>{
            if(category){
                setProducts(data.filter((prod) => prod.category === category));
                setTitle(category);
            }else{
                setProducts(data);
                setTitle("Productos")
            }
        });
    }, [category])

    return( 
        <main>
            <ItemList productsData={products} title={title}/>
        </main>
    )
}