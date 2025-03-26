import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
   <Header/>
   {/* This is where the content will go */}
   <Outlet/> 
   <Footer/>
    </>
  )
}

export default App
