import { div } from 'framer-motion/client';
import React from 'react'
import { SiJavascript, SiHtml5, SiTailwindcss, SiPhp, SiTypescript, SiPython, SiNodedotjs, SiNextdotjs } from 'react-icons/si';

const ScrollingIcons = () => {

  const icons = [
    <SiJavascript/>,
    <SiHtml5/>,
    <SiTailwindcss/>,
    <SiPhp/>,
    <SiTypescript/>,
    <SiPython/>,
    <SiNodedotjs/>,
    <SiJavascript/>,
    <SiNextdotjs/>,
    <SiJavascript/>,
    <SiHtml5/>,
    <SiTailwindcss/>,
    <SiPhp/>,
    <SiTypescript/>,
    <SiPython/>,
    <SiNodedotjs/>,
    <SiJavascript/>,
    <SiNextdotjs/>,
    <SiJavascript/>,
    <SiHtml5/>,
    <SiTailwindcss/>,
    <SiPhp/>,
    <SiTypescript/>,
    <SiPython/>,
    <SiNodedotjs/>,
    <SiJavascript/>,
    <SiNextdotjs/>,
  ];


  return (
    <section>

      <div className='overflow-hidden w-full relative text-white mt-8 pointer-events-none'>

        <div className='flex gap-16 animate-scrollLoop'>
          {icons.map((icon, index) => (
            <div key={`icon-1-${index}`}>
              <i className='text-4xl text-blue-500'>{icon}</i>
            </div>
          ))}
          {icons.map((icon, index) => (
            <div key={`icon-2-${index}`}>
              <i className='text-4xl text-blue-500'>{icon}</i>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default ScrollingIcons;