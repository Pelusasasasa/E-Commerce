import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const ElectroShoppingContext = createContext();

export const ElectroShoppingProvider = ({children}) =>{
    const [listOfProducts,setListOfProducts] = useState([]);
    const [count,setCount] = useState(0);

     useEffect(() => {
        axios.get(`http://localhost:4000/api/productos/buscarProducto/textoVacio/descripcion`)
        .then(response => response.data)
        .then(data => setListOfProducts(data))
     }, [])
    

    return(
        <ElectroShoppingContext.Provider value={{
            count,setCount,
            listOfProducts,setListOfProducts
        }}>
            {children}
        </ElectroShoppingContext.Provider>
    )
}