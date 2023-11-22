import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default App
