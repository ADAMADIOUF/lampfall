import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import House from './components/House'
import Lands from './components/Lands'
import Navbar from './components/Navbar'

import Rents from './components/Rents'
import Sidebar from './components/Sidebar'
import SingleProduct from './components/SingleProduct'
import AboutPage from './pages/AboutPage'

import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rent' element={<Rents />} />
        <Route path='/house' element={<House />} />
        <Route path='/land' element={<Lands />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App