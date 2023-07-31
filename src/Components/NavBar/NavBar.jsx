import { NavLink } from 'react-router-dom';
import {ArrowDownIcon,ArrowUpIcon} from '@heroicons/react/24/solid'
import { useRef, useState } from 'react';

const NavBar = () => {
const [arrowDown,setArrowDown] = useState(true);

const listaCategorias = useRef('listaCategorias');

function renderArrow() {
  if (arrowDown) {
    return <ArrowDownIcon className='h-4 w-4 text-black'></ArrowDownIcon>
  }else{
    return <ArrowUpIcon className='h-4 w-4 text-black'></ArrowUpIcon>
  }
}

//hacemos que se despliegue el menu de productos y tambien que cambie el stado de flecha abajo hacia arriba
function  handleMenu() {
  setArrowDown(!arrowDown)
  listaCategorias.current.classList.toggle('hidden');
}

  return (
    <nav className='flex justify-between items-center fixed top-0 w-full z-10 py-5 px-8 text-sm font-light bg-yellow-300'>
      <ul className='flex gap-3 w-1/2 items-center'>
        <li><NavLink to='/' className='text-2xl'><span>Electro </span><span className='text-yellow-100'> Avenida</span></NavLink></li>
        <li className='flex flex-col relative cursor-pointer'>
          <div onClick={(e)=>{handleMenu(e)}} className='text-xl flex  items-center justify-between'>
            <p>Categorias</p>
            {renderArrow()}
          </div>
          <ul ref={listaCategorias}  className='hidden absolute top-8 border-black bg-yellow-300  border w-full'>
            <li className='inline-block hover:bg-slate-300 text-center w-full'><NavLink to='/Veladores' className='text-xl font-bold'>Veladores</NavLink></li>
            <li className='inline-block hover:bg-slate-300 text-center w-full'><NavLink to='/Plafones' className='text-xl font-bold'>Plafones</NavLink></li>
            <li className='inline-block hover:bg-slate-300 text-center w-full'><NavLink to='/Exterior' className='text-xl font-bold'>Exterior</NavLink></li>
            <li className='inline-block hover:bg-slate-300 text-center w-full'><NavLink to='/Iluminacion' className='text-xl font-bold'>Iluminacion</NavLink></li>
          </ul>
        </li>
        <li className='text-xl'><NavLink to='/marcas' className='py-0.5 px-2'>Marcas</NavLink></li>
      </ul>
      <ul></ul>
    </nav>
  )
}

export default NavBar