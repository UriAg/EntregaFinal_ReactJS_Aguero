import "../css/Navbar.css"
import { CartWidget } from "./CartWidget";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () =>{
    
    return (
        <header>
            <nav>
                <Link to="/"><h1 className="m-0 p-0">Flart</h1></Link>
                <ul className="m-0 p-0">
                    <li><CustomLink href={"/"}>Inicio</CustomLink></li>
                    <li>
                        <div className="dropdown-container">
                            <CustomLink className={"products-dropdown"} href={"/products"}>Productos </CustomLink>
                            
                            <ul className="dropdown-menu-container">
                               
                                <li><CustomLink className={"dropdown-menu-item"} href={"/products/tablas"}>Tablas </CustomLink></li>
                                <li><CustomLink className={"dropdown-menu-item"} href={"/products/cazuelas"}>Cazuelas </CustomLink></li>
                                <li><CustomLink className={"dropdown-menu-item"} href={"/products/utensilios"}>Utensilios </CustomLink></li>

                            </ul>
                        </div>
                    </li>
                    <li><CustomLink href={"/contact"}>Contacto</CustomLink></li>
                    <li><CustomLink href={"/info"}>Información</CustomLink></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    );
}

function CustomLink({className, href, children, ...props}){
    const path = useLocation().pathname;
    return(
        <Link className={`${className ? className: ""} ${path === href ? "active-link" : ""}`} to={href} {...props}>{children}</Link>
    )
}