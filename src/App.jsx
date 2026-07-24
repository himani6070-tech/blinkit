import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCardSection from './components/ProductCardSection'
import Footer from './components/Footer'

function App() {
 

  return (
        <>
        <Header/>
        <Hero/>
        <Categories/>
        
        <ProductCardSection heading={"Featured Products"}/>
        <ProductCardSection heading={"Best Sellers"}/>
        <ProductCardSection heading={"Latest Arrivals"}/>
        <ProductCardSection heading={"Top Rated Products"}/>
        <Footer/>
        </>
  )
}

export default App
