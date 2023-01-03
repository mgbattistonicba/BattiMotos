import './App.css';
import { useState } from 'react'
import ItemListContainer from './componente//Navbar/ItemListContainer';
import Navbar from './componente/Navbar/Navbar';
import ItemCount from './componente//Navbar/ItemCount';
import CartWidget from './componente/Navbar/CartWidget';


function App() {
  const [show, setShow] = useState(false)
  return (
    
    <div className='App'>
        <Navbar />
        <ItemListContainer greeting='Bienvenido a BattiMotos' />
        <CartWidget />   
        <ItemCount onAdd={(count) => console.log('se agregaron '+ count)} stock={10}/>
    </div>
  );
}

export default App;
