import { Link } from "react-router-dom"
import '../css/HomePage.css'


export const HomePage = () => {
  return (
    <>
      <main className="homepage-main">
        <div className="enter-shop-container">
          <div className="enter-shop-positioner">
            <div className="enter-shop-btn">
              <h1>Flart</h1>
              <hr/>
              <Link to={"/products"}>Visitar</Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="homepage-footer">
        <span>&copy; 2023 por Flart, Todos los derechos reservados</span>
      </footer>
    </>
  )
}
