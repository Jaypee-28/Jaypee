import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp, FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-scroll'


const Footer = () => {

  
  return (
    <section id='contact' className='md:px-[110px] py-8 bg-gray-950 text-white '>

      <div className='flex justify-between gap-8 max-md:flex-col max-md:pl-16 max-md:pr-4'>

        <div className='flex flex-col gap-2'>
          <a className='font-bold text-xl italic text-white' href="#">Jaypee</a>
          <p className='max-w-[400px]'>I'm dedicated to building exceptional web experiences with passion, precision, and a touch of innovation. Let's create something extraordinary, your project deserves nothing less than the best.</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-xl'>Quick Links</h1>

          <li className='cursor-pointer'><Link to='home' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300 ">Home</Link></li>

          <li className='cursor-pointer'><Link to='about' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300 ">About</Link></li>

          <li className='cursor-pointer'><Link to='project' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300 ">Projects</Link></li>

          <li className='cursor-pointer'><Link to='contact' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300 ">Contact</Link></li>
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
            <a href="https://wa.me/message/L7LUGESAX775M1" target='_blank'><FaWhatsapp className='text-xl'/></a>
            <a href="https://wa.me/message/L7LUGESAX775M1" target='_blank'><FaTwitter className='text-xl'/></a>
            <a href="https://wa.me/message/L7LUGESAX775M1" target='_blank'><FaGithub className='text-xl'/></a>
            <a href="https://wa.me/message/L7LUGESAX775M1" target='_blank'><FaLinkedin className='text-xl'/></a>
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