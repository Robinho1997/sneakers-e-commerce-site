import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/Homepage'
import MenShop from './pages/MenShop'
import WomenShop from './pages/WomenShop'
import About from './pages/About'
import Support from './pages/Support'
import Cart from './pages/Cartpage'
import Discount from "./pages/Discountpage"
import Layout from "./Layout"
import Cookies from "./pages/Cookies"
import Impressum from "./pages/Impressum"
import Datenschutz from "./pages/Datenschutz"
import Productpage from "./pages/Productpage"

function RoutesLayout() {

    return (
        <Layout>
            <Routes>
                <Route path="/:name" element={<Productpage/>}></Route>
                <Route path='/' element={<HomePage />} />
                <Route path='/herren' element={<MenShop />} />
                <Route path='/damen' element={<WomenShop />} />
                <Route path='/über' element={<About />} />
                <Route path='/kundendienst' element={<Support />} />
                <Route path='/einkaufswagen' element={<Cart />} />
                <Route path='/angebote' element={<Discount />} />
                <Route path='/cookies' element={<Cookies />} />
                <Route path='/impressum' element={<Impressum />} />
                <Route path='/datenschutz' element={<Datenschutz />} />
            </Routes>
        </Layout>
    )
}
export default RoutesLayout