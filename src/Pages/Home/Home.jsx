import { useContext } from "react"
import Layout from "../../Components/Layout/Layout"
import { ElectroShoppingContext } from "../../Context"
import Card from "../../Components/Card/Card";

const Home = () => {

  const {listOfProducts} = useContext(ElectroShoppingContext);

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 max-w-screen-lg w-full">
        {listOfProducts.map(elem => (
          <Card
          key={elem._id}
          descripcion={elem.descripcion}
          codigo={elem.codigo}
          category={elem.rubro}
          imgURL={"http://192.168.0.101:4000/api/productos/"+ elem._id + "/image"}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Home