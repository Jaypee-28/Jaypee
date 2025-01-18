import React from 'react'
import Billswift from '../assets/Img/Billswift.png'
import Vintage from '../assets/Img/Vintage.png'
import Patungans from '../assets/Img/Patungans.png'
import Estate from '../assets/Img/Estate.png'
import { motion } from 'framer-motion'

const Projects = () => {


  return (
    <section className='md:px-[110px]  bg-gray-950 max-md:px-4 py-16'>

      <h1 className='text-center font-bold text-3xl text-blue-500'>My Projects</h1>
      <p className='text-center text-xl font-semibold text-gray-200'>Some inspiring projects I've worked on.</p>

      <div className='grid grid-cols-3 gap-16 mt-8 max-md:grid-cols-1 px-4'>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{boxShadow: "0 0 15px #3B82F6"}} className='p-4 rounded-lg flex flex-col gap-2'>
          <img className='rounded-lg' src={Billswift} alt="" />
          <h1 className='text-blue-500 font-bold text-2xl'>BillSwift</h1>
          <p className='text-white'>A VTU platform, where you can seamlessly recharge and pay your bills.</p>
        </motion.div>

        <div style={{boxShadow: "0 0 15px #3B82F6"}} className='p-4 rounded-lg flex flex-col gap-2'>
          <img className='rounded-lg' src={Vintage} alt="" />
          <h1 className='text-blue-500 font-bold text-2xl'>Vintage Exchange</h1>
          <p className='text-white'>A Vintage clothing exchange platform where you can buy and sell your vintages materials.</p>
        </div>

        <div style={{boxShadow: "0 0 15px #3B82F6"}} className='p-4 rounded-lg flex flex-col gap-2 md:hidden'>
          <img className='h-[200px]' src={Patungans} alt="" />
          <h1 className='text-blue-500 font-bold text-2xl'>Patungans</h1>
        </div>

        <div style={{boxShadow: "0 0 15px #3B82F6"}} className='p-4 rounded-lg flex flex-col gap-2'>
          <img className='h-[md:200px] rounded-lg' src={Estate} alt="" />
          <h1 className='text-blue-500 font-bold text-2xl'>Sky Estate</h1>
          <p className='text-white'>A real estate platform where you can easily purchase landed properties, etc.</p>
        </div>

      </div>

    </section>

  )
}

export default Projects;