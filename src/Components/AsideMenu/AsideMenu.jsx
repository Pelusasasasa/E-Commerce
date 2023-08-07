import {XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ElectroShoppingContext } from '../../Context';
import './style.css';

const asideMenu = () => {

  const {openSideMenu,setOpenSideMenu,productToShow} = useContext(ElectroShoppingContext);

  const isHidden = openSideMenu ? '' : 'hidden';

  return (
        <aside className={`${isHidden} detalle-producto right-0 fixed bg-white flex flex-col`}>
            <div className='flex justify-between items-center px-6 mb-2 '>
              <h2 className='text-2xl'>Detalle de producto</h2>
              <XMarkIcon onClick={() => (setOpenSideMenu(false))} className='w-6 h-6 cursor-pointer'></XMarkIcon>
            </div>
            <figure className='px-6 h-64'>
                <img className='w-full h-full object-cover rounded-lg border border-black cursor-pointer' src={productToShow.imgURL} alt="title" />
            </figure>
            <p className='text-center px-2 text-2xl mt-2'>{productToShow.descripcion}</p>
            <p className='flex justify-between mx-4'>
                <span>{productToShow.marca}</span>
                <span>{productToShow.oferta ? "$" + productToShow.precioOferta : "Consultar Precio"}</span>
            </p>
        </aside>
  )
}

export default asideMenu