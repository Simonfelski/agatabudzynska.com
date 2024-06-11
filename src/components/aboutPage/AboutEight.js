import React from 'react'
import { Link } from 'react-router-dom'

const AboutEight = () => {
  return (
    <div className='flex flex-col pt-5 lg:py-10 lg:pt-10 lg:flex-row lg:max-w-[1366px] lg:m-auto'>
       <hr className="hidden lg:max-w-[1366px] border-black lg:order-1" />
      <div className='lg:order-1 lg:w-1/2'>
        <img src="../images/aboutPage/about8.jpg" alt="Pozycja jogi" />
      </div>
      <div className='lg:order-2'>
      <div className='order-1 lg:order-2 p-5 text-center lg:text-left lg:p-16'>
        <h2 className='text-lg md:text-2xl font-bold pb-5 lg:text-3xl'>Czujesz, że chcesz <br /> ćwiczyć właśnie ze mną?</h2>
        <p className='md:text-lg'>Joga ma wiele oblicz. Wybierz praktykę idealną właśnie dla Ciebie.</p>
      </div>
      <div className='order-3 lg:order-3 flex justify-center pt-5 pb-8'>
        <Link to='/cwicz-ze-mna'>
        <button className='px-3 py-2 md:px-4 md:py-3 uppercase text-[#fff] bg-buttonTwo font-bold tracking-wider'>Sprawdź opcje</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default AboutEight