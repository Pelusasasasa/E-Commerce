import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-0 w-full z-10 py-5 px-8 text-sm font-light bg-yellow-300">
      <ul>
        <li><NavLink to='/' className='text-2xl'><span>Electro </span><span className="text-yellow-100"> Avenida</span></NavLink></li>
      </ul>
      <ul></ul>
    </nav>
  )
}

export default NavBar