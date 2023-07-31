import Layout from "../../Components/Layout/Layout"

const Marcas = () => {
  return (
    <Layout>
        <section id="cardsMaras" className="grid grid-cols-4 gap-2 mt-2 mb-2 ">
            <a href="https://ferrolux.com.ar/" target="_black" className="border bg-white border-gray-200">
                <img className="w-full h-full object-contain" src="https://ferrolux.com.ar/public/img/logo_ferrolux.png" alt="Ferrolux" />
                <h2 className="text-center">Ferrolux</h2>
            </a>
            <a href="https://www.candil.com.ar/home.aspx" target="_black" className="border bg-white border-gray-200">
                <img className="w-full h-full object-contain" src="https://www.candil.com.ar/Resources/candil.jpg" alt="Candil" />
                <h2 className="text-center">Candil</h2>
            </a>
            <a href="https://www.josecapobianco.com.ar/" target="_black" className="border bg-black border-gray-200">
                <img className="w-full object-contain h-full" src="https://www.josecapobianco.com.ar/img/logo-capobianco.png" alt="Capobianco" />
                <h2 className="text-center">Capobianco</h2>
            </a>
            <a href="https://www.josecapobianco.com.ar/" target="_black" className="border bg-black border-gray-200">
                <img className="w-full object-contain h-full" src="https://www.josecapobianco.com.ar/img/logo-capobianco.png" alt="Capobianco" />
                <h2 className="text-center">San Justo</h2>
            </a>
        </section>
    </Layout>
  )
}

export default Marcas