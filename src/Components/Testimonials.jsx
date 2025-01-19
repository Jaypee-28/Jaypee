import React, { useEffect, useState } from 'react'
import Profile from '../assets/Img/Profile.png'
import { FaArrowRight, FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';


const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const Reviews = [
    {
      id: 1,
      Quote: FaQuoteLeft,
      comment: 'Jaypee is an exceptional developer who brings captivity and precision to every project. Working with him was an absolute pleasure.',
      Image: Profile,
      Name: 'Jane Doe',
      Role: 'Project Manager',
    },

    {
      id: 2,
      Quote: FaQuoteLeft,
      comment: 'Working with Jaypee was one of the best decisions I made for my project. His technical expertise and dedication to deadlines were impressive. Highly recommended!',
      Image: Profile,
      Name: 'Mrs Igwe',
      Role: 'Project Manager',
    },

    {
      id: 3,
      Quote: FaQuoteLeft,
      comment: 'His attention to details and ability to solve complex problems are unmatched, Highly recommend working with Jaypee.',
      Image: Profile,
      Name: 'John Smith',
      Role: 'Project Manager',
    },

    {
      id: 4,
      Quote: FaQuoteLeft,
      comment: 'Jaypee ability to take an idea and turn it into a fully functional, user-friendly product is incredible. He goes above and beyond to deliver quality work',
      Image: Profile,
      Name: 'Treasure Mark',
      Role: 'Project Manager',
    },

  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      const screenWidth = window.innerWidth;
      setItemsPerView(screenWidth >= 1024 ? 2 : 1);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - itemsPerView + Reviews.length) % Reviews.length 
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + itemsPerView) % Reviews.length
    );
  };

  
  return (
    <section className='py-16 px-[110px] bg-gray-950 text-white max-md:px-4 '>

      <h1 className='font-bold text-3xl text-center text-blue-500'>Testimonials</h1>
      <p className='text-center font-semibold text-xl'>Reviews from my satisfied clients</p>

      <div className='grid grid-cols-2 gap-8 mt-8 max-md:grid-cols-1'>

        { Reviews.slice(currentIndex, currentIndex + itemsPerView).map((card) => (

          <div style={{
            boxShadow: "0 0 15px #6B7280"
          }} key={card.id} className='flex flex-col gap-2 p-4 shadow-lg shadow-gray-800 rounded-lg'>

            <card.Quote className='text-4xl'/>

            <p>{card.comment}</p>

            <div className='flex gap-2 items-center'>
              <img className='w-[50px]' src={card.Image} alt="" />
              <h2 className='font-bold text-xl'>{card.Name}</h2>
            </div>

          </div>

        )) }

      </div>

      <div className='flex justify-center gap-16 mt-8'>
      <button onClick={handlePrevClick} className='py-4 px-4 border font-bold border-gray-200 rounded-full text-white'><FaArrowLeft/></button>
      <button onClick={handleNextClick} className='py-4 px-4 border font-bold border-gray-200 rounded-full text-white'><FaArrowRight/></button>
      </div>

    </section>
  )
}

export default Testimonials;