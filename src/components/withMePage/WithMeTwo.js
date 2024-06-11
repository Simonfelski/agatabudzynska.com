import React from 'react'
import withMeData from '../../data/withMePageData/withMeData'
import WithMeOffer from './WithMeOffer'

const WithMeTwo = () => {

    const trainingOffer = withMeData.map(offer => {
        return (<WithMeOffer key={offer.id} offer={offer} />)
    })

  return (
    <div className='max-w-[1366px] m-auto px-5'>
      <div className='text-center'>
        <h2 className='text-lg md:text-xl lg:text-2xl font-bold py-5'>Nie wiesz, co wybrać?</h2>
        <p className='md:text-lg'>Zerknij tutaj. Chętnie pomogę Ci przy wyborze.</p>
      </div>
      <div className='py-10 flex flex-wrap gap-5 lg:flex lg:flex-row lg:gap-5 lg:flex-wrap'>
        {trainingOffer}
      </div>
    </div>
  )
}

export default WithMeTwo
