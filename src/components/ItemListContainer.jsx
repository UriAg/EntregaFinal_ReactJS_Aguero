import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

export const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState();
    
    //Se almacena en "products" la categoría seleccionada cada vez que se actualiza "category"
    //"category" (URL param para uso dinámico '/products/:category')
    
    const category = useParams().category;

    useEffect(()=>{
        const productsRef = collection(db, 'products');
        getDocs(productsRef).then((resp) =>{
            if(category){
                const objeto = resp.docs.filter((doc) => doc.data().category === category);
                setProducts(objeto.map((doc)=>{
                    return {...doc.data(), id: doc.id}
                }));
                setTitle(category);
            }else{
                setProducts(resp.docs.map((doc)=>{
                    return {...doc.data(), id: doc.id}
                }))
                setTitle("Todos")
            }
        })
    }, [category])

    return( 
        <main>
            <ItemList productsData={products} title={title}/>
        </main>
    )
}