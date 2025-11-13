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
      
      <Topclients/>
      <Ouraim/>

      <Footer/>
    </div>
  )
}

export default Home
