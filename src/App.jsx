import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import ScrollingIcons from './Components/ScrollingIcons';

const App = () => {
  return (
   <section className='bg-gray-950 overflow-x-hidden'>

    <Navbar/> 

    <Hero/>

    <ScrollingIcons/>

    <About/>

    <Projects/>

    <Testimonials/>

    <Footer/>

   </section>
  )
}

export default App;
