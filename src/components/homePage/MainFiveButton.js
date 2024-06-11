import React from 'react'
import { Link } from 'react-router-dom';

const MainFiveButton = () => {
  return (
    <div className='flex justify-center pb-5'>
      <Link to='/cwicz-ze-mna'><button className='text-xs md:text-xl uppercase bg-primary text-[#fff] tracking-wider hover:scale-110 transition-all duration-300 ease-in-out font-bold py-2 px-5 md:py-3 md:px-7'>ĆWICZ ZE MNĄ</button></Link>   
    </div>
  )
}

export default MainFiveButton
