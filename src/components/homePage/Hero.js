import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
	return (
		    <div className="">
            <div className="md:max-w-full m-auto uppercase text-[#fff] relative">
                <img src="../images/homePage/heroSection/hero1.jpg" alt="Pozycja jogi" className="w-full h-auto" />
                <h1 className='absolute top-0 py-20 px-10 text-md md:text-4xl lg:text-5xl z-20 '>Joga to coś więcej niż tylko ruch</h1>
                <p className='absolute top-0 py-24 md:py-32 lg:py-28 px-10 mt-10 text-xs md:text-2xl lg:text-3xl z-20'>To metoda kształtowania ciała, umysłu i ducha. <br />To całkowicie nowa filozofia życia</p>
                <Link to='/cwicz-ze-mna'><button className="absolute bottom-0 right-0 mb-5 text-xs md:text-lg mr-5 md:mb-20 md:mr-10 uppercase bg-[#fff] text-[black] tracking-wider hover:scale-110 transition-all duration-300 ease-in-out font-bold p-2 md:p-3 z-10">Jak praktykować jogę</button>
                </Link>
                
            </div>
        </div>
	)
}

export default Hero
