import React, {useState} from 'react'
import {Route, Routes} from "react-router-dom" 
import Navbar from './components/Navbar'
import Start from './pages/Start'
import MenShop from './pages/MenShop'
import WomenShop from './pages/WomenShop'
import About from './pages/About'
import Support from './pages/Support'
import Cart from './pages/Cart'

function App() {
  

  return (
    <div className="App">
      <Navbar/>


      <Routes>
        <Route path='/' element={<Start/>}/>  
        <Route path='/herren' element={<MenShop/>}/>
        <Route path='/damen' element={<WomenShop/>}/>
        <Route path='/über' element={<About/>}/>
        <Route path='/kundendienst' element={<Support/>}/>
        <Route path='/einkaufswagen' element={<Cart/>}/>
      </Routes> 
    </div>
  )
}

export default App
