import React from 'react'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Ouraim from "../components/Ouraim"
import Footer from "../components/Footer"
import Topclients from "../components/Topclients"



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Footer/>
      <Topclients/>
      <Ouraim/>
    </div>
  )
}

export default Home
