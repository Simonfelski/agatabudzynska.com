import React from 'react'

const MyOffer = (props) => {
  return (
    <div className=" rounded-md px-5 md:px-5 py-10 text-center md:w-2/4 lg:max-w-[1366px]">
      <h2 className='font-semibold md:text-xl lg:text-lg pb-5'>{props.offer.title}</h2>
      <p className='md:text-lg'>{props.offer.description}</p>
    </div>
  )
}

export default MyOffer
