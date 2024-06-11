import React from 'react'
import Ticket from '../Ticket'
import { FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import Footer from '../Footer';

const Contact = () => {
	return (
		<div>
            <div className='lg:flex lg:flex-row max-w-[1366px] m-auto lg:-mb-16 lg:pt-20'>
			<div className='lg:w-2/5'>
            
				<img src="../images/contactPage/contact1.png" alt="Pozycja jogi" className='h-3/4' />
			</div>
			<div className='text-justify px-5 lg:px-0 lg:w-2/5 lg:pt-16'>
				<h2 className='font-bold text-center text-lg md:text-xl lg:text-2xl py-5 lg:py-10'>Masz do mnie pytanie?</h2>
				<p className='pb-5 md:text-lg'>
					Zastanawiasz się, jaką praktykę wybrać? Chcesz uzupełnić informacje dotyczące wyjazdów warsztatowych? Poznać
					szczegóły oferty dla firm lub umówić się na zajęcia indywidualne? A może po prostu zaprosić mnie na wywiad?
					Lub podzielić się czymś, co właśnie wpadło Ci do głowy?
				</p>
				<p className='pb-5 md:text-lg'>Pisz swobodnie. <br /> Odpowiem, gdy tylko zejdę z maty.</p>
			</div>
            </div>
            <Ticket />
            <hr className="lg:m-auto border-[black] lg:max-w-[1366px] hidden lg:block" />

            <div className='lg:py-10 max-w-[1366px] m-auto'>
            <div className='font-bold text-center text-lg md:text-xl lg:text-2xl pt-5 pb-10 px-5'>
                <h2>Zaobserwuj mnie też w social mediach.</h2>
            </div>
            <div className='lg:flex lg:flex-row'>
                <div className='lg:flex-col'>
            <div className='px-5 text-center lg:text-left md:text-lg'>
                <p className='pb-10'>To tu pokazuję, jak prawidłowo wykonać poszczególne asany. Dzielę się też wydarzeniami, w których możesz wziąć udział. Promuję sukcesy moich uczniów. I daję potężną dawkę pozytywnej motywacji.</p>
                <p>Prowadzę profile na Facebooku i Instagramie. Wybierz to medium, z którego najczęściej korzystasz.</p>
            </div>
            <div className='p-5'>
                <ul className='flex justify-end'>
                    <li className='pr-5'>
                    <a href="https://www.instagram.com/agata_budzynska_joga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className='rounded'><FaSquareInstagram className='text-3xl md:text-6xl text-buttonTwo' /></a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/agata.budzynska.9" target="_blank"><FaFacebook className='text-3xl md:text-6xl text-buttonTwo' /></a>
                    </li>
                </ul>
            </div>
            </div>
            <div className='relative z-5'>
            <div className="absolute inset-0 bg-buttonTwo bg-opacity-60"></div>
            <img src="../images/contactPage/contact2.png" alt="Pozycja jogi" />
            </div>
            </div>
            </div>
            <Footer />
		</div>
	)
}

export default Contact
