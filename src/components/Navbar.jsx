import { CartWidget } from "./CartWidget";

export const Navbar = () =>{
    return (
        <header>
            <nav>
                <h1 className="m-0 p-0">Flart</h1>
                <ul className="m-0 p-0">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Información</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    );
}