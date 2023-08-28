import { useContext } from "react"
import Layout from "../../Components/Layout/Layout"
import { ElectroShoppingContext } from "../../Context"
import Card from "../../Components/Card/Card";
import AsideMenu from '../../Components/AsideMenu/AsideMenu'
import Search from "../../Components/Search/Search";

const Home = () => {

  const {listOfProducts,setSearchByDescription,setCondition} = useContext(ElectroShoppingContext);

  return (
    
    <Layout>
      <h2 className="text-xl font-bold">Productos Exclusivos</h2>
      {/* Search es el buscador de porudctos con el input y la condicion */}
      <Search setCondition={setCondition} setSearchByDescription={setSearchByDescription} />

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