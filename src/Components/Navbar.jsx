import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Img/dev.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=''>
      <nav className="bg-gray-700 ">
        {/* DESKTOP VIEW */}
        <div className="flex justify-between text-white py-4 px-[110px] items-center max-md:hidden">
          <a
            className="font-bold text-xl italic"
            href="#"
          >
            <img
              className="w-[70px] rounded-full inline-block"
              src={Logo}
              alt="portfolio logo"
            />
            Jaypee
          </a>

          <ul className="flex gap-4">
            <Link to='home' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300 ">Home</Link> 

            <Link to='about' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300">About</Link>

            <Link to='project' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300">Projects</Link>

            <Link to='contact' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300">Contact</Link>
          </ul>

          <button className="py-2 px-4 text-white border border-blue-500 rounded-[40px] font-semibold bg-blue-500 duration-500 hover:bg-blue-400">
            <a href="https://wa.me/message/L7LUGESAX775M1" target='_blank'>Hire Me</a>
          </button>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex justify-between from-gray-700 text-white px-6 py-4 md:hidden">
          <a
            className="font-bold text-xl italic"
            href="#"
          >
            <img
              className="w-[50px] rounded-full inline-block"
              src={Logo}
              alt=""
            />
            Jaypee
          </a>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-xl font-bold" />
            ) : (
              <FaBars className="text-xl font-bold" />
            )}
          </button>
        </div>

        {/* SIDEBAR VIEW */}
        <div
          className={`fixed top-0 right-0 h-screen w-[250px] bg-gray-700 text-white shadow-lg transition-transform duration-300 z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <FaTimes className="text-xl" />
          </button>

          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            transition={{ duration: 1 }}
          >

          <ul className="flex flex-col justify-center text-center pt-8 gap-4">
            <Link to='home' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300 ">Home</Link> 

            <Link to='about' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300">About</Link>

            <Link to='project' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300">Projects</Link>

            <Link to='contact' smooth={true} activeStyle={"text-blue-500"} duration={500} className="hover:text-blue-500 hover:cursor-pointer duration-300">Contact</Link>
          </ul>

          </motion.div>

          
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
