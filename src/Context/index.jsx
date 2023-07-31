import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const ElectroShoppingContext = createContext();

export const ElectroShoppingProvider = ({children}) =>{
    const [listOfProducts,setListOfProducts] = useState([]);

    //Lo usamos para cuendo escribimos en el input que se nos busque los productos
    const [searchByDescription,setSearchByDescription] = useState('textoVacio');

    //Obtiene el valor que tiene el select para buscar los productos
    const [condition,setCondition] = useState('descripcion');

     useEffect(() => {
        axios.get(`http://localhost:4000/api/productos/buscarProducto/textoVacio/descripcion`)
        .then(response => response.data)
        .then(data => setListOfProducts(data))
     }, []);

     useEffect(() => {
        axios.get(`http://localhost:4000/api/productos/buscarProducto/${searchByDescription}/${condition}`)
        .then(response => response.data)
        .then(data => setListOfProducts(data))
     }, [searchByDescription,condition]);
    

    return(
        <ElectroShoppingContext.Provider value={{
            listOfProducts,setListOfProducts,
            searchByDescription,setSearchByDescription,
            condition,setCondition
        }}>
            {children}
        </ElectroShoppingContext.Provider>
    )
}