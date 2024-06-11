import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const StartToday = () => {

  const [calendarClicked, setCalendarClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!calendarClicked) {
      window.scrollTo(0, 0);
    }
  }, [location, calendarClicked]);


  return (
    <div className='bg-secondary pb-5 m-auto'>
    <div className='flex flex-col lg:flex-row m-auto lg:pt-20 md:max-w-[1366px]'>
      <div className='flex flex-col w-full text-center px-5 lg:text-left lg:pr-16 order-2 lg:order-1'>
        <h2 className='text-lg md:text-2xl font-bold'>Zacznij praktykę jogi już dziś.</h2>
        <p className='md:text-lg py-5 md:pt-10 md:pb-20'>I przekonaj się, że z jogą Twoje życie może być szczęśliwe i proste.</p>
        <div>
          <Link to='/cwicz-ze-mna' onClick={() => setCalendarClicked(true)}><button className='text-xs md:text-xl w-1/2 lg:w-full uppercase bg-primary text-[#fff] tracking-wider hover:scale-110 transition-all duration-300 ease-in-out font-bold py-2 px-5 md:py-3 md:px-7'>SPRAWDŹ KALENDARZ ZAJĘĆ</button></Link>
        </div>
      </div>
      <div className='pb-5 lg:py-0 lg:flex lg:justify-end order-1 lg:order-2'>
        <img src="../images/homePage/startToday/startToday1.jpg" alt="Agata instruktorka" className='md:w-80 md:h-2/3 md:pr-5 md:hidden lg:flex'/>
        <img src="../images/homePage/startToday/startToday2.jpg" alt="Pozycja jogi" className='hidden md:flex md:h-2/3'/>
      </div>
    </div>
    </div>
  )
}

export default StartToday
