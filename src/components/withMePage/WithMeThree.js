import React from 'react'
import WithMeClass from './WithMeClass'
import withMeDataClass from '../../data/withMePageData/withMeDataClass'


const WithMeThree = () => {

	const types = withMeDataClass.map(type => {
		return <WithMeClass key={type.id} type={type} />
	})


	return (
		<div className='max-w-[1366px] m-auto text-center pt-5 px-10'>
			<h2 className='text-lg md:text-xl lg:text-2xl font-bold p-5 lg:py-10'>Który styl jogi będzie idealny właśnie dla Ciebie?</h2>
			<p className='font-semibold md:text-lg lg:text-xl text-justify'>
				Joga może przyjmować różne formy. Sprawdź, na którą z nich masz teraz ochotę. Mała podpowiedź. Dobrze jest
				różnicować style jogi we własnej praktyce. Dzięki temu zbudujesz siłę na równi z elastycznością.
			</p>
            {types}
		</div>
	)
}

export default WithMeThree
