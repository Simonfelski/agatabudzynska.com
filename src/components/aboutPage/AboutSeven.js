import React from 'react'
import AboutSixValues from './AboutSixValues'
import privateValuesData from '../../data/aboutPageData/privateValuesData'

const AboutSeven = () => {
	const privateValues = privateValuesData.map(privateValue => {
		return <AboutSixValues key={privateValue.id} privateValue={privateValue} />
	})

	return (
    <div className='text-center px-5 py-5'>
        <h2 className='font-bold py-5 text-xl md:text-2xl'>A prywatnie?</h2>
        <p className='py-5 md:text-lg'>Jaka jestem? Mam swoje dziwne zwyczaje. Może Ty podchodzisz do świata podobnie?</p>
        <div className='lg:flex md:m-auto md:max-w-[1366px] md:gap-12'>{privateValues}</div>
    </div>
    )
}

export default AboutSeven
