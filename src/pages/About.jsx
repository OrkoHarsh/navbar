import React from 'react'
import AboutComnonent2 from '../components/AboutComnonent2'
import AboutComponent1 from '../components/AboutComponent1'
import AboutComponent3 from '../components/AboutComponent3'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../Newsletter'

function About() {
  return (
    <div>
        <Header/>
        <AboutComponent1 />
        <AboutComnonent2 />
        <AboutComponent3 />
        <Newsletter/>
        <Footer />



    </div>
  )
}

export default About