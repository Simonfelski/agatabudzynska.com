import React from 'react'
import { Link } from 'react-router-dom'

const AboutOne = () => {
	return (
		<div>
			<div className="lg:flex lg:pt-20 lg:max-w-[1366px] m-auto">
				<div>
					<img src="../images/aboutPage/about1.jpg" alt="" />
				</div>
				<div className="lg:flex lg:flex-col lg:justify-between p-5 lg:p-0 lg:pl-10 ">
					<h3 className="lg:pb-4 md:text-xl">Nazywam się</h3>
					<h2 className="pb-5 font-bold lg:pl-14 md:text-xl lg:text-3xl lg:pb-16 ">Agata Budzyńska</h2>
					<p className="md:text-lg">
						Jestem nauczycielką jogi i trenerem medycznym. Kobietą lubiącą wyzwania, lecz dążącą do nich w swoim rytmie.
					</p>
					<p className="pt-5 lg:pt-16 md:text-lg">
						Im więcej zdobywam wiedzy w temacie jogi, tym więcej widzę, ile jeszcze jest do odkrycia. Pragnę więc złamać
						ustalony wizerunek jogi jako tylko aktywności fizycznej. I pokazać Ci, że droga jogi to droga do spełnienia
						marzeń.
					</p>
					<div className="flex justify-end py-5 lg:py-10 pb-10 lg:pb-0">
						<Link to="/cwicz-ze-mna">
							<button className="uppercase bg-primary text-[#fff] transition-all duration-300 ease-in-out font-bold py-2 px-3 md:p-3 z-10 tracking-wider">
								JAK MOŻESZ PRAKTYKOWAĆ JOGĘ?
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="lg:flex lg:justify-center lg:max-w-[1366px] m-auto lg:mt-24">
				<div>
				{/* <hr className="lg:m-auto border-[black] max-w-[1366px]" /> */}
				<div className='lg:flex lg:flex-col lg:my-24 px-5'>
					<h2 className="font-bold pb-5 pt-10 lg:pl-14 text-xl md:text-2xl lg:pb-8 lg:pt-10 text-center ">Jak wygląda Twój normalny dzień?</h2>
					<p className="lg:pb-8 md:text-lg">
						Wstajesz zmęczona. Idziesz do pracy, która Cię stresuje. Starasz się spełniać milion ról, jak każda
						współczesna kobieta. Czujesz ból tu i ówdzie. Ale dzielnie go ignorujesz. Po wykonaniu miliona obowiązków
						zasypiasz zmęczona. I znowu się budzisz, w dokładnie tym samym stanie.
					</p>
					<p className="pb-5 lg:pb-8 md:text-lg">Chcę pomóc Ci przerwać to błędne koło.</p>
					<p className='md:text-lg pb-10 lg:pb-0'>
						<b>Joga to nie tylko aktywność fizyczna. To metoda kształtowania ciała, umysłu i ducha.</b> Metoda
						holistyczna, która szlifuje charakter i sprawia, że wszystkie życiowe cele zmieniają status z niemożliwych
						na osiągalne. To Twój nowy styl życia. Z radością pokażę Ci, jak wprowadzić go w Twoją codzienność.
					</p>
					</div>
				</div>
				<div className="hidden lg:block">
					<img src="../images/aboutPage/about2.jpg" alt="" />
				</div>
			</div>
			{/* <hr className="lg:m-auto border-[black] max-w-[1366px]" /> */}

	

			<div className="p-5 lg:p-0 md:text-lg lg: max-w-[1366px] m-auto">
				<h2 className="font-bold pb-5 text-xl md:text-2xl lg:pb-16 lg:pt-20 text-left">Marzy mi się świat ludzi spełnionych i szczęśliwych. </h2>
				<p className='pb-5 lg:pb-8'>
					Realizujących swoje marzenia z lekkością i ogromną pewnością siebie. Dokonujących zdrowych dla siebie wyborów
					na każdym kroku swojego życia. Świadomych swego ciała i charakteru. Wypoczętych. I zwyczajnie dobrych dla
					siebie i innych.
				</p>
				<p>Wiem, to brzmi nieskończenie idealistycznie. Lecz wiem, że gdy żyjesz zgodnie z jogą, jest to możliwe.</p>
			</div>

			
			<div className='flex justify-center py-5 lg:justify-end lg:m-auto lg:py-10 max-w-[1366px]'>
				<Link to='/cwicz-ze-mna'>
				<button className="uppercase bg-primary text-[#fff] transition-all duration-300 ease-in-out font-bold py-2 px-3 md:p-3 z-10 tracking-wider">WYBIERZ SWOJĄ PRAKTYKĘ</button>
				</Link>
			</div>
		</div>
	)
}

export default AboutOne
