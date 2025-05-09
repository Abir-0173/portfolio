import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Skils from './Components/Skills/skils'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Turning Ideas into Clean, Functional & Impactful Web Solutions' title='What I Offer' />
        <Service />
      </div>
      <div className='container'>
        <Title subTitle='Curious, Creative & Always Ready to Build' title='About Me' />
        <About />
      </div>
      <div className="container">
        <Title subTitle='Frontend plus Backend' title='My Skills At' />
        <Skils />
      </div>
      <div className="container">
        <Title subTitle='Get in Touch' title='Contact US' />
      <Contact />
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}

export default App