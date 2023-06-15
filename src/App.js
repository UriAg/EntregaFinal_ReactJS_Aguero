import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola, este sitio está en desarrollo, vuelva prontos"/>
    </>
  );
}

export default App;
