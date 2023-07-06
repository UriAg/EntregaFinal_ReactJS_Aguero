import "../css/Navbar.css"
import { useEffect, useState } from "react";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";


// Componente para navegación superior
export const Navbar = () =>{
    
    return (
        <header>
            <nav>
                <Link to="/"><h1 className="m-0 p-0">Flart</h1></Link>
                <ul className="m-0 p-0">
                    <li><Link to="/">Inicio</Link></li>
                    <li>
                        <div className="dropdown-container">
                            <Link className="products-dropdown" to="/products">Productos </Link>
                            <ul className="dropdown-menu-container">
                                <li><Link className="dropdown-menu-item" to="/products/tablas">Tablas</Link></li>
                                <li><Link className="dropdown-menu-item" to="/products/cazuelas">Cazuelas</Link></li>
                                <li><Link className="dropdown-menu-item" to="/products/utensilios">Utensiliosssssssssssss</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="/contact">Contacto</Link></li>
                    <li><Link to="/info">Información</Link></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    );
}

