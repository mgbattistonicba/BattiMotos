import './ItemListContainer.css'
import { useEffect, useState } from 'react'

const ItemListContainer = () => {
    const [search, setSearch] = useState('celular')

    useEffect(() => {
        console.log('llamada a api ' + search)

        return () => console.log('limpieza')
    }, [search])
    
    console.log('render')
}

export default ItemListContainer