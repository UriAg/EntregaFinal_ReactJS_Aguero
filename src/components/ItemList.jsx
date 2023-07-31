import { Link } from 'react-router-dom'
import { Item } from './Item'

//Shows an array of products - ItemListContainer.jsx
export const ItemList = ({productsData, title}) =>{
    let containerStyles = {
        display: "Grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(20em, 1fr))",
        gap: "1em",
        justifyItems:"center"
    }

  return (
    <div style={{padding:"1em .5em 0 .5em"}}>
        {
            title &&
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{fontSize:"1.5em", marginBottom:".5em"}}>
                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                    <li className="breadcrumb-item"><Link to="/products">Productos</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{title.charAt(0).toUpperCase()+title.slice(1)}</li>
                </ol>
            </nav>
        }
        
        <div style={containerStyles}>
            {
                productsData.length > 0 && 
                productsData.map((product)=>{
                    
                    return(
                        <Item product={product} key={product.id}/>
                    );
                })     
            }
        </div>
    </div>
  )
}
