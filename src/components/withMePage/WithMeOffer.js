import React from 'react'
import { Link } from 'react-router-dom'

const WithMeOffer = (props) => {
  return (
    <div className='lg:w-1/4 m-auto bg-[#eceae8] rounded-xl'>
      <div className='text-center px-5'>
      <h2 className='font-semibold md:text-xl py-5'>{props.offer.title}</h2>
      <p className={`md:text-lg pb-5 px-4 md:px-2 lg:pb-10 text-center lg:text-justify tracking-wider 
      ${props.offer.id === 1 ? 'lg:pb-24' : ''}
      ${props.offer.id === 3 ? 'lg:pb-16' : ''}
      ${props.offer.id === 5 ? 'lg:pb-16' : ''}
    `}>{props.offer.description}</p>
      </div>
      <div className='pb-5 lg:text-center flex justify-center'>
        <Link to='/kontakt'>
      <button className="uppercase bg-primary text-[#fff] transition-all duration-300 ease-in-out font-bold py-2 px-3 md:p-3 z-10 tracking-wider">
      {props.offer.id === 1 || props.offer.id === 5 ? 'ZAREZERWUJ MIEJSCE' : 
           props.offer.id === 2 || props.offer.id === 4 ? 'NAPISZ DO MNIE' : 
           props.offer.id === 3 ? 'ZACZNIJ KORZYSTAĆ' : ''}
      </button>
      </Link>
      </div>
      
    </div>
  )
}

export default WithMeOffer



