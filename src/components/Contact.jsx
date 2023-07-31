import { Link } from 'react-router-dom'
import '../css/Contact.css'

export const Contact = () => {
  return (
    <div className="contact-container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{fontSize:"1.5em", margin:"0", padding:"0 0 .4em .4em"}}>
                <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contacto</li>
            </ol>
        </nav>
        <div className='medias-and-form'>
          <div className='medias-contact-container'>
            <h1>Clickeanos!</h1>
            <span>Instagram:</span>
            <span id="instagramContact"><b><a href="https://www.instagram.com/buscandolaveta/"> @BuscandoLaVeta</a></b></span>

            <span>Facebook:</span>
            <span id="gmailContact"><b><a href="https://www.facebook.com/buscandolaveta/"> Buscando la Veta</a></b></span>
            
            <span>Whatsapp:</span>
            <span id="whatsappContact"><b><a href="https://wa.me/543544300779?text=Hola!%20me%20gustaría%20hacer%20una%20consulta"> Escribinos!</a></b></span>
          </div>
          <form className="contact-form-container">
            <label htmlFor="userName">
              NOMBRE
            </label>
            <input type="text" id="userName"/>

            <label htmlFor="userEmail">
              EMAIL
            </label>
            <input type="email" id="userEmail"/>

            <label htmlFor="userPhoneNumber">
              TELÉFONO 
              <small> (OPCIONAL)</small>
            </label>
            <input type="number" id="userPhoneNumber"/>

            <label htmlFor="userMessage">
              MENSAJE
            </label>
            <textarea id="userMessage" cols="30" rows="10"></textarea>
            <div className='submit-btn'>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
    </div>
  )
}
