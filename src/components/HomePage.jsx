import { Link } from "react-router-dom"
import '../css/HomePage.css'
import { useEffect } from "react"


export const HomePage = () => {
  return (
    <>
      <main className="homepage-main">
        <div className="enter-shop-container">
          <div className="enter-shop-btn">
            <h1>Flart</h1>
            <Link to={"/products"}>Visitar</Link>
          </div>
        </div>
      </main>
      <footer className="homepage-footer">
        <span>&copy; 2023 por Flart, Todos los derechos reservados</span>
      </footer>
    </>
  )
}
