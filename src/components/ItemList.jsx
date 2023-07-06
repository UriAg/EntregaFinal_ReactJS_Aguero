import { Item } from './Item'

//Componente muestra un array de objetos, utilizada en ItemListContainer
export const ItemList = ({productsData, title}) =>{
    let containerStyles = {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }

    let estilos = {
        textAlign: "left",
        marginLeft: "1.5em"
    }

  return (
    <div style={{paddingTop:"1em"}}>
        <h2 style={estilos}>Sección: { title ? title.charAt(0).toUpperCase()+title.slice(1): "Productos"}</h2>
        <div style={containerStyles}>
            {
                productsData.length > 0 && 
                productsData.map((product)=>{
                    
                    return(
                        <Item product={product} key={product.product_id}/>
                    );
                })     
            }
        </div>
    </div>
  )
}
