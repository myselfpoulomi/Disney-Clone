import React from 'react'
import Nav from './Components/Nav'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import PopularMovies from './movie cards/PopularMovies'
import './App.css'
import NowPlaying from './movie cards/NowPlaying'
import TopRated from './movie cards/TopRated'
import Upcomming from './movie cards/Upcomming'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-blue-9507  '>
      <Nav/>
      <Slider />
      <ProductionHouse/>
      <PopularMovies />
      <NowPlaying />
      <TopRated />
      <Upcomming />
      <Footer />
    </div>
  )
}

export default App