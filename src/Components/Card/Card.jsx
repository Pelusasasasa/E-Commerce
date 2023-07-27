const Card = ({codigo,descripcion,imgURL,category}) => {
  return (
    <div className="flex cursor-pointer flex-col w-56 h-60 rounded-lg">
        <figure className="relative w-full h-4/5">
            <span className="absolute bottom-0 mx-2 my-2 rounded-lg px-2 bg-white/60">{category ? category : "Category"}</span>
            <img className="w-full h-full object-cover" src={imgURL} alt={descripcion} />
        </figure>
        <div>
            <p>{descripcion}</p>
        </div>
    </div>
  )
}

export default Card