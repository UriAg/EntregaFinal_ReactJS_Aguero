import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { HomePage } from './components/HomePage';
import { Cart } from './components/Cart';
import { Information } from './components/Information';
import { Contact } from './components/Contact';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';



function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>

              <Route path="/"  element={<HomePage/>}/>
              <Route path="/cart"  element={<Cart/>}/>
              <Route path="/info"  element={<Information/>}/>
              <Route path="/contact"  element={<Contact/>}/>
              <Route path="/products/"  element={<ItemListContainer/>}/>
              <Route path="/products/:category"  element={<ItemListContainer/>}/>
              <Route path="/item/:id"  element={<ItemDetailsContainer/>}/>
              <Route path="/checkout"  element={<Checkout/>}/>

            </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
