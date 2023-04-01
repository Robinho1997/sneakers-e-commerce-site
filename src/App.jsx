import React, {useState} from 'react'
import {Route, Routes} from "react-router-dom" 
import Navbar from './components/Navbar'
import Start from './pages/Start'
import Shop from './pages/Shop'
import About from './pages/About'
import Support from './pages/Support'
import Cart from './pages/Cart'

function App() {
  

  return (
    <div className="App">
      <Navbar/>


      <Routes>
        <Route path='/' element={<Start/>}/>  
        <Route path='/pages/shop' element={<Shop/>}/>
        <Route path='/pages/über' element={<About/>}/>
        <Route path='/pages/kundendienst' element={<Support/>}/>
        <Route path='/pages/einkaufswagen' element={<Cart/>}/>
      </Routes> 
    </div>
  )
}

export default App
