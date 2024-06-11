import React from 'react'
import AboutThreeValues from './AboutThreeValues'
import dataValues from '../../data/aboutPageData/dataValues'

const AboutTwo = () => {
	const myValues = dataValues.map(value => {
		return <AboutThreeValues key={value.id} value={value} />
	})

	return (
		<div className='p-10 text-center lg:max-w-[1366px] m-auto'>
			<h2 className='font-bold pb-5 text-xl md:text-2xl'>Co jest dla mnie ważne?</h2>
			<p className='font-semibold pb-5 md:text-lg lg:pb-12'>Mam kilka wartości, którymi kieruję się i na macie i w życiu.</p>
			<div className='flex flex-wrap gap-6 md:gap-12 justify-center m-auto'>{myValues}</div>
		</div>
	)
}

export default AboutTwo
