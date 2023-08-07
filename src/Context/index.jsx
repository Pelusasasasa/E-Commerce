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
        axios.get(`http://192.168.0.101:4000/api/productos/buscarProducto/textoVacio/descripcion`)
        .then(response => response.data)
        .then(data => setListOfProducts(data))
     }, []);

     useEffect(() => {
        axios.get(`http://192.168.0.101:4000/api/productos/buscarProducto/${searchByDescription}/${condition}`)
        .then(response => response.data)
        .then(data => setListOfProducts(data))
     }, [searchByDescription,condition]);
    
     //Lo usamos para abrir el sideMenu
     const [openSideMenu,setOpenSideMenu] = useState(false);


     const [productToShow,setProductToShow] = useState({
        descripcion:"",
        category:"",
        codigo:"",
        precio:0,
        img:"",
        marca:""
     })

    return(
        <ElectroShoppingContext.Provider value={{
            listOfProducts,setListOfProducts,
            searchByDescription,setSearchByDescription,
            condition,setCondition,
            openSideMenu,setOpenSideMenu,
            productToShow,setProductToShow
        }}>
            {children}
        </ElectroShoppingContext.Provider>
    )
}