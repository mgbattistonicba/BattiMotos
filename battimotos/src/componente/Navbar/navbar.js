import './Navbar.css'

const Navbar =() => {
    return(
        <nav>

            <h1  className= "navegacion">Venta de motos</h1>
            <div className= "button">
                <button onClick={() =>{console.log('hice click')}}>Sport</button>
                <button onClick={() =>{console.log('hice click')}}>Nacked</button>
                <button onClick={() =>{console.log('hice click')}}>Tourning</button>
            </div>
        </nav>
    )


}

export default Navbar

