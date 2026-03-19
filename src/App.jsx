  
import './App.css'
import { RouterProvider } from "react-router-dom"
import router from "./routes"
 
import Navbar from './globals/navbar/Navbar'
import Footer from './globals/footer/Footer'
import Home from './pages/home/Home'
import Product from './pages/home/components/Product'
 
 

function App() {

  return (
    <>
    <Navbar/>
    
    <RouterProvider router = {router}/>
   
    <Footer/>
     

     </>
  )
}

export default App
