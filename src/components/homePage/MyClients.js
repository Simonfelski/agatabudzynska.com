import React from 'react'

const MyClients = (props) => {
  return (
    <div className='m-auto px-5 py-10 lg:py-10  w-9/12 md:text-center md:max-w-[1366px] md:w-5/12 lg:w-3/12'>
      <h2 className={`font-semibold pb-5 md:text-lg font-montserrat
      ${props.clientType.id === 2 ? 'md:pt-2' : ''}
      `}>{props.clientType.title}</h2>
      <p className='md:text-lg '>{props.clientType.description}</p>
    </div>
  )
}

export default MyClients
