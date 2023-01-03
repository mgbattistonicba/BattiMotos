import CartWidget from "./CartWidget"
import './Navbar.css'


const Navbar =() => {
    return(
        <nav>

            <h2  className= "navegacion">Venta de motos</h2>
            <div style={{display: "flex"}}>
                <button>Sport</button>
                <button>Nacked</button>
                <button>Tourning</button>
            </div>
            <CartWidget />
        </nav>
    )


}

export default Navbar

