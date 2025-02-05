import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import ScrollingIcons from './Components/ScrollingIcons';
import { FaArrowUp } from 'react-icons/fa';
import { Analytics } from '@vercel/analytics/react';

const App = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',   
    });
  };


  return (
   <section className='bg-gray-950 overflow-x-hidden relative'>

    <Navbar/> 

    <Hero/>

    <ScrollingIcons/>

    <About/>

    <Projects/>

    <Testimonials/>

    <Footer/>

    <div>
      <button onClick={scrollToTop} className='bg-blue-500 py-4 px-4 rounded-full absolute bottom-[120px] right-2'>
        <FaArrowUp className='text-xl text-gray-200'/>
      </button>
    </div>

   </section>
  )
}

export default App;
