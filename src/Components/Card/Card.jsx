const Card = ({codigo,descripcion,imgURL,category,marca}) => {
  function traerCategory(id){
    if (id === 3) {
      return "Velador"
    }
    if (id === 4) {
      return "Colgante"
    }
  }
  return (
    <div className="flex cursor-pointer flex-col w-56 rounded-lg">
        <figure className="relative w-full">
            <span className="absolute bottom-0 mx-2 my-2 rounded-lg px-2 bg-white/60">{category ? traerCategory(category) : "Category"}</span>
            <img className="rounded-lg w-full h-full object-cover" src={imgURL} alt={descripcion} />
        </figure>
        <div>
            <span className="flex justify-center font-light w-full">{codigo}</span>
            <p className="text-sm text-center mt-1 font-bold">{descripcion.slice(0,31)}</p>
        </div>
        <div className="flex justify-between mt-auto">
          <p className="text-sm font-light">{marca ? marca : "Marca"}</p>
          <p className="text-sm font-light">Consultar Stock</p>
        </div>
    </div>
  )
}

export default Card