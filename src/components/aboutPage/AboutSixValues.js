import React from 'react'

const AboutSixValues = (props) => {
  return (
    <div className='py-3 lg:py-5'>
      <h2 className='font-bold md:text-xl  py-3'>{props.privateValue.title}</h2>
      <p className='px-10 md:text-lg'>{props.privateValue.description}</p>
    </div>
  )
}

export default AboutSixValues
