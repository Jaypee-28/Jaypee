import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp, FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'


const Footer = () => {

  
  return (
    <section className='md:px-[110px] py-8 bg-gray-950 text-white '>

      <div className='flex justify-between gap-8 max-md:flex-col max-md:pl-16 max-md:pr-4'>

        <div className='flex flex-col gap-2'>
          <a className='font-bold text-xl italic text-white' href="#">Jaypee</a>
          <p className='max-w-[400px]'>I'm dedicated to building exceptional web experiences with passion, precision, and a touch of innovation. Let's create something extraordinary, your project deserves nothing less than the best.</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-xl'>Quick Links</h1>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>Contact</li>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-xl'>Contact Me</h1>
          <p><AiOutlineMail className='inline-block text-xl'/> maxwelljohnpaul29@gmail.com</p>
          <p><FaPhoneAlt className='inline-block text-xl'/> +234 814 442 6428</p>
          <p><FaLocationDot className='inline-block text-xl'/> Owerri, Imo State.</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-xl'>Socials</h1>
          <ul className='flex gap-2'>
            <FaWhatsapp className='text-xl'/>
            <FaTwitter className='text-xl'r/>
            <FaGithub className='text-xl'/>
            <FaLinkedin className='text-xl'/>
          </ul>
        </div>

      </div>

        <div className=' mt-6 py-6 border-t border-gray-600'>
        
          <div className='text-center'>

      <p>&copy; 2025 <span className='italic font-semibold'>Jaypee</span>. All right reserved.</p>
      
      </div>

        
        </div>

    </section>

  )
}

export default Footer;