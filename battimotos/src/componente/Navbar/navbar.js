import './navbar.css'

const Navbar =() => {
    return(
        <nav className= "navegacion">

            <h1>Venta de motos</h1>
            <div>
                <button onClick={() =>{console.log('hice click')}}>Sport</button>
                <button onClick={() =>{console.log('hice click')}}>Nacked</button>
                <button onClick={() =>{console.log('hice click')}}>Tourning</button>
            </div>
        </nav>
    )


}

export default Navbar

