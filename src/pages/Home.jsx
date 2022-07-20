import React from 'react'
import Agocharfeature from '../components/Agocharfeature'
import Features from '../components/Features'
// import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header />
        <Slider />
        <Agocharfeature />
        <Features />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home