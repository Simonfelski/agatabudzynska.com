import React from 'react'
import { PiFlowerLotusThin } from 'react-icons/pi'

const JogaValues = props => {
	return (
		<div className='m-auto px-5 md:px-3 py-6 text-center md:text-lg w-9/12 md:max-w-[1366px] md:h-1/2 md:w-3/12 lg:h-1/2 lg:w-3/12'>
			<p className='flex justify-center'>
				<PiFlowerLotusThin size={30} />
			</p>
			<p>{props.yogaValue.description}</p>
		</div>
	)
}

export default JogaValues
