import React from 'react'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Ouraim from "../components/Ouraim"
import Footer from "../components/Footer"
import Topclients from "../components/Topclients"
import Ourservices from '../components/Ourservices'
// import ChatBot from '../components/ChatBot'
import BotChat from '../components/botchat'



const Home = () => {
  return (
    <div>
      {/* <ChatBot/> */}
      
      <Navbar/>
      <Banner/>
      <BotChat/>
      <Ourservices/>
      
      <Topclients/>
      <Ouraim/>

      <Footer/>
    </div>
  )
}

export default Home
