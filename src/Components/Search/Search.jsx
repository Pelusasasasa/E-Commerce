const Search = ({setCondition,setSearchByDescription}) => {
  return (
    <div className="flex justify-between gap-2 mb-3">
        <select onChange={(e)=> setCondition(e.target.value)} className="bg-white rounded-lg border-none">
          <option value="descripcion">Descripcion</option>
          <option value="_id">Codigo</option>
          <option value="marca">Marca</option>
        </select>
        
        <input type="text" onChange={(e) => setSearchByDescription(e.target.value)} placeholder="Buscar Producto" className="p-4 border-black border w-80 rounded-lg focus:outline-none"/>
      </div>
  )
}

export default Search