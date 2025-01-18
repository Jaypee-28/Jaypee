import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Img/dev.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
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
              alt=""
            />
            Jaypee
          </a>

          <ul className="flex gap-4">
            <li className="hover:text-blue-500 hover:cursor-pointer duration-300 ">Home</li>
            <li className="hover:text-blue-500 hover:cursor-pointer duration-300">About</li>
            <li className="hover:text-blue-500 hover:cursor-pointer duration-300">Projects</li>
            <li class="relative group">
        <a href="#" className="hover:text-blue-500">Contact</a>
        <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transform transition-transform"></span>
      </li>
          </ul>

          <button className="py-2 px-4 text-white border border-blue-500 rounded-[40px] font-semibold bg-blue-500 duration-500 hover:bg-blue-400">
            Hire Me
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

            <ul className="flex flex-col gap-4 px-6 pt-16 text-center">
            <li className="hover:text-blue-500 hover:cursor-pointer duration-300">Home</li>
            <li className="hover:text-blue-500 hover:cursor-pointer duration-300">About</li>
            <li className="hover:text-blue-500 hover:cursor-pointer duration-300">Projects</li>
            <li className="hover:text-blue-500 hover:cursor-pointer duration-300">Contact</li>
          </ul>

          </motion.div>

          
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
