import './App.css';
import { useState } from 'react'
import ItemListContainer from './componente//Navbar/ItemListContainer';
import Navbar from './componente/Navbar/Navbar';
import ItemCount from './componente//Navbar/ItemCount';


function App() {
  const [show, setShow] = useState(false)
  return (
    
    <div className='App'>
        <Navbar />
         { show && <ItemListContainer greeting='Bienvenido a BattiMotos'/> }
        <ItemCount onAdd={(count) => console.log('se agregaron '+ count)} stock={10}/>
    </div>
  );
}

export default App;
