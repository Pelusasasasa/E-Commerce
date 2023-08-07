import { useContext } from "react"
import { ElectroShoppingContext } from "../../Context"

const Card = ({codigo,descripcion,imgURL,category,marca,oferta,precioOferta}) => {

  const {setOpenSideMenu,setProductToShow} = useContext(ElectroShoppingContext);

  function traerCategory(id){
    if (id === 3) {
      return "Velador"
    }
    if (id === 4) {
      return "Colgante"
    }
  }

  function setProductInSideMenu() {
    const product = {
      codigo,
      descripcion,
      marca,
      precioOferta,
      oferta,
      category,
      imgURL
    }

    setOpenSideMenu(true);
    setProductToShow(product);
  }
  return (
    <div className="flex cursor-pointer flex-col w-56 rounded-lg" onClick={()=>(setProductInSideMenu())}>
        <figure className="relative h-72">
            <span className="absolute bottom-0 mx-2 my-2 rounded-lg px-2 bg-white/60">{category ? traerCategory(category) : "Category"}</span>
            <img className="rounded-lg w-full h-full object-cover" src={imgURL} alt={descripcion} />
        </figure>
        <div>
            <span className="flex justify-center font-light w-full">{codigo}</span>
            <p className="text-sm text-center mt-1 font-bold">{descripcion.slice(0,31)}</p>
        </div>
        <div className="flex justify-between mt-auto">
          <p className="text-sm font-light">{marca ? marca : "Marca"}</p>
          <p className="text-sm font-bold">{oferta ? "$" + precioOferta : "Consultar Precio"}</p>
        </div>
    </div>
  )
}

export default Card