import React from 'react'

const AboutThreeValues = (props) => {
  return (
    <div className="pt-1 pb-5 px-10 bg-[#dbd3cd] rounded-xl md:h-1/3 md:w-2/4 text-justify lg:text-center max-w-[1366px]">
    <h2 className="text-md md:text-lg font-semibold mb-5 mt-5 text-center">{props.value.title}</h2>
    <p className='md:text-lg'>{props.value.description}</p>
  </div>
  )
}

export default AboutThreeValues
