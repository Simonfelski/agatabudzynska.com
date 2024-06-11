import React from 'react'
import { Link } from 'react-router-dom'

const AboutMain = () => {


	return (
		<div className='text-center py-5 md:py-16 lg:max-w-[1366px] m-auto'>
			<div className='m-auto px-5 text-center lg:text-left py-5 lg:ml-60'>
				<h2 className='font-bold text-xl md:text-2xl'>Hej! Mam na imię Agata</h2>
				<h3 className='font-semibold md:text-lg'>Jestem instruktorką jogi i trenerem medycznym.</h3>
			</div>
			<div className='lg:flex '>
				<div>
					<img src="../images/homePage/aboutMain/aboutMain1.png" alt="" />
				</div>
				<div className='py-5 lg:pl-10 text-left md:text-lg'>
					<p className='px-5'>
						Jako nauczycielka szerzę filozofię jogi jak świat szeroki i długi. Bo wierzę, że prowadzi ona do odzyskania
						poczucia sprawczości i kontroli nad własnym życiem. A tego w chaosie współczesnego świata bardzo brakuje.
						Prowadzę zajęcia grupowe i indywidualne w nurtach vinyasa joga, yin joga i joga nidra. Wplatam w nie naukę
						oddechu i medytacji, by ułatwić moim uczniom czerpanie z jogi korzyści fizycznych, mentalnych i duchowych.
					</p>
					<p className='p-5'>
						A jako trener medyczny? Korzystając z mojej wiedzy i praktyki jogi pomagam osiągać upragnione cele dotyczące
						sprawności ruchowej. I robię to w sposób przemyślany, bezpieczny i skuteczny.
					</p>
				</div>
			</div>
				<div className='lg:max-w-[1240px] lg:flex lg:justify-end lg:m-auto'>
					<Link to='/o-mnie' ><button className='text-xs md:text-lg uppercase bg-primary text-[#fff] tracking-wider hover:scale-110 transition-all duration-300 ease-in-out font-bold py-2 px-5 md:py-3 md:px-7'>POZNAJ MNIE BLIŻEJ</button></Link>
				</div>
		</div>
	)
}

export default AboutMain
