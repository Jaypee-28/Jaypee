import React from 'react';
import headerImage from '../assets/Img/Header.png'
import { motion } from 'framer-motion';

const Hero = () => {


  return ( 
    <section className='outline-red-800'>

      <header className='md:px-[110px] bg-gradient-to-b from-gray-700 to-gray-950 max-md:px-4 max-md:bg-gradient-to-b relative'>

        <div className='flex justify-between gap-8 max-md:flex-col'>

          <motion.div className='flex flex-col gap-2 text-white mt-16 max-md:text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <p>Hey there 😍, I'm</p>
            <h1 className='font-semibold md:text-7xl max-md:text-4xl text-blue-500' >Maxwell Johnpaul</h1>
            <p className='font-semibold text-xl'>A Frontend Developer</p>
            <p className='italic'>...Turning ideas into visually stunning and highly functional digital experiences</p>
            <div className='text-center gap-4 flex max-md:justify-center'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              className='text-white py-2 px-4 rounded-[40px] border border-blue-500 hover:bg-blue-500 duration-300'>Projects</motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              className='bg-blue-500 text-white py-2 px-4 rounded-[40px] hover:bg-blue-400 duration-300'><a href="https://wa.me/message/L7LUGESAX775M1">Contact</a></motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            <img className='w-[400px]' src={headerImage} alt="" />
          </motion.div>

        </div>

      </header>
    </section>

  )
}

export default Hero;