import { useContext } from "react"
import Layout from "../../Components/Layout/Layout"
import { ElectroShoppingContext } from "../../Context"
import Card from "../../Components/Card/Card";
import AsideMenu from '../../Components/AsideMenu/AsideMenu'

const Home = () => {

  const {listOfProducts,setSearchByDescription,setCondition} = useContext(ElectroShoppingContext);

  return (
    
    <Layout>
      <h2 className="text-xl font-bold">Productos Exclusivos</h2>
      <div className="flex justify-between gap-2 mb-3">
        <select onChange={(e)=> setCondition(e.target.value)} className="bg-white rounded-lg border-none">
          <option value="descripcion">Descripcion</option>
          <option value="_id">Codigo</option>
          <option value="marca">Marca</option>
        </select>
        
        <input type="text" onChange={(e) => setSearchByDescription(e.target.value)} placeholder="Buscar Producto" className="p-4 border-black border w-80 rounded-lg focus:outline-none"/>
      </div>
      <div className="grid grid-cols-4 gap-4 max-w-screen-lg w-full min-h-screen">
        {listOfProducts.map(elem => (
          <Card
          key={elem._id}
          descripcion={elem.descripcion}
          codigo={elem._id}
          category={elem.rubro}
          marca={elem.marca}
          oferta={elem.oferta}
          precioOferta={elem.precioOferta}
          imgURL={"http://192.168.0.101:4000/api/productos/"+ elem._id + "/image"}
          />
        ))}
     </div>
     <AsideMenu/>
    </Layout>
  )
}

export default Home