import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound';

import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import {  ElectroShoppingProvider } from './Context';

function App() {

  function AppRoutes() {
    let routes = useRoutes([
      {path:'/',element: <Home/>},
      {path:'/*',element: <NotFound/>}
    ]);

    return routes


  }

  return (
    <ElectroShoppingProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar/>
        <Footer/>
      </BrowserRouter>
    </ElectroShoppingProvider>
  )
}

export default App
