import { useState } from 'react'

const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount]= useState(0)

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const increment = () => {
        for(let i = 0; i < 1; i++) {
            setCount(previo => {
                console.log(previo)
                console.log(count)
                return previo + 1
            })
        }
        return
    }



    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount