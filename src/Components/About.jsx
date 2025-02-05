import React from 'react'
import aboutImage from '../assets/Img/About-icon.png'
import { FaUsers, FaSearchDollar, FaGraduationCap, FaHeart } from "react-icons/fa";
import { BsListCheck } from 'react-icons/bs';
import { MdOutlineCalculate } from 'react-icons/md';
import { motion } from 'framer-motion';


const About = () => {

  const cardData = [
    {
      id: 1,
      icon: FaHeart,
      title: "Passion and Dedication",
      content: "I'm not just a developer, I'm a partner in your project's success, bringing passion, creativity, and attention to detail to every line of code.",

    },

    { 
      id: 2,
      icon: MdOutlineCalculate,
      title: "Zeal for problem-solving",
      content: "I thrive on challenges and take pride in finding innovative solutions to complex problems.Your success is my top priority.",

    },

    {
      id: 3,
      icon: BsListCheck,
      title: "Attention to Details",
      content: "I believe in clean, efficient code and pixel-perfect design. Every details matters when building something great.",

    },

    {
      id: 4,
      icon: FaUsers,
      title: "Collaboration and Communication",
      content: "I value teamwork and clear communication, making the development process smooth and enjoyable.",

    },

    {
      id: 5,
      icon: FaSearchDollar,
      title: "SEO Implementation",
      content: "My experience goes beyond aesthetics. I implement SEO best practices to ensure your website ranks higher on search engines, driving traffic and maximizing visibility",

    },

    {
      id: 6,
      icon: FaGraduationCap,
      title: "Continous  Learning",
      content: "Technology evolves, and so do I. As a developer I'm not just resting on what I know, I'm constantly exploring and always learning, improving, and striving for excellence.",

    },
  ];


  return (
    <section id="about" className='md:px-[110px] py-16 max-md:py-32 bg-gray-950 text-white max-md:px-4'>

      <div className='grid grid-cols-2 gap-8 max-md:grid-cols-1'>

        <img src={aboutImage} alt="About image" />

        <div className='flex flex-col gap-2 mt-4'>
          <h1 className='font-bold text-3xl text-blue-500'>ABOUT ME</h1>
          <p className=''>I'm a creative frontend developer with expertise in building sleek, responsive, and user-friendly websites. My passion lies in transforming ideas into code and delivering impactful digital solutions.</p>
          <p className='text-lg'>With skills in React, Tailwind CSS, and JavaScript, I am constantly learning and evolving to stay ahead in the ever-changing world of web development.</p>
          <p className='text-lg'>I believe that technology should not only work but inspire. My goal is to build solutions that make life easier and more enjoyable, one line of code at a time.</p>
          <button className='p-2 px-6 rounded-[40px] border border-blue-500 font-semibold'><a href="https://wa.me/message/L7LUGESAX775M1">Let's Connect</a></button>
        </div>

      </div>


      {/* WHY WORK WITH ME */}
      <div className='mt-16'>
  <h1 className='text-center font-bold text-3xl text-blue-500'>Why Choose Me</h1>

  <motion.div
  initial="initial"
  animate="animate"
  variants={{ 
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
   }}
  className='grid grid-cols-3 gap-8 mt-8 max-md:grid-cols-1'>
    {cardData.map((card) => (
      <motion.div
        initial= { {opacity: 0, y: 50} }
        animate= {{ opacity: 1, y: 0 }}
        transition={ { duration: 0.8 }}
      key={card.id} className='p-4 rounded-lg shadow-xl border border-blue-950 flex flex-col gap-2'>
        {/* Content inside the card */}
       <card.icon className='text-5xl text-blue-500'/>
        <h2 className='font-semibold text-lg'>{card.title}</h2>
        <p className='text-gray-200'>{card.content}</p>
        {/* If you want to use an icon, you can do so like this */}
      </motion.div>
    ))}
  </motion.div>

</div>


    </section>
  )
}

export default About;