import CartWidget from "./CartWidget"
import './Navbar.css'


const Navbar =() => {
    return(
        <nav>    
            
            <div className="Navbar">
                <button>Motos</button>
                <button>Accesorios</button>
                <button>Cascos</button>
                <button>Indumentaria</button>
            </div>
            <CartWidget />
            <h2  className= "navegacion">Venta de motos</h2>

        </nav>
       
    )


}

export default Navbar

