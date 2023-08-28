import { useContext } from "react"
import Layout from "../../Components/Layout/Layout"
import Search from "../../Components/Search/Search"
import { ElectroShoppingContext } from "../../Context"
import Card from "../../Components/Card/Card"

const Ofertas = () => {
    const {listOfProducts} = useContext(ElectroShoppingContext);
  return (
    <Layout>
        <h1>Ofertas</h1>
        <Search />
        <div className="grid grid-cols-4 gap-4 max-w-screen-lg w-full min-h-screen">
            {listOfProducts.map(elem => (
                <Card
                    key={elem.id}
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
    </Layout>
  )
}

export default Ofertas