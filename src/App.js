import Hero from './components/homePage/Hero'
import MainOne from './components/homePage/MainOne'
import Navbar from './components/Navbar'
import MainTwo from './components/homePage/MainTwo'
import jogaValuesData from './data/homePageData/jogaValuesData'
import JogaValues from './components/homePage/JogaValues'
import MainThree from './components/homePage/MainThree'
import AboutMain from './components/homePage/AboutMain'
import MyClients from './components/homePage/MyClients'
import clientsData from './data/homePageData/clientsData'
import MainFour from './components/homePage/MainFour'
import Recommendation from './components/homePage/Recommendation'
import dataRecommendation from './data/homePageData/dataRecommendation'
import MainFive from './components/homePage/MainFive'
import MyOffer from './components/homePage/MyOffer'
import myOfferData from './data/homePageData/myOfferData'
import MainFiveButton from './components/homePage/MainFiveButton'
import StartToday from './components/homePage/StartToday'
import StayWithMe from './components/homePage/StayWithMe'
import AboutOne from './components/aboutPage/AboutOne'
import AboutTwo from './components/aboutPage/AboutTwo'
import AboutFour from './components/aboutPage/AboutFour'
import AboutFive from './components/aboutPage/AboutFive'
import AboutSeven from './components/aboutPage/AboutSeven'
import AboutEight from './components/aboutPage/AboutEight'
import Footer from './components/Footer'
import Contact from './components/contact/Contact'
import WithMeOne from './components/withMePage/WithMeOne'
import WithMeTwo from './components/withMePage/WithMeTwo'
import WithMeThree from './components/withMePage/WithMeThree'
import WithMeCalendar from './components/withMePage/WithMeCalendar'
import WithMeFour from './components/withMePage/WithMeFour'
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
	const valuesYoga = jogaValuesData.map(yogaValue => {
		return <JogaValues key={yogaValue.id} yogaValue={yogaValue} />
	})

	const clientsType = clientsData.map(clientType => {
		return <MyClients key={clientType.id} clientType={clientType} />
	})

	const trainingOffer = myOfferData.map(offer => {
		return <MyOffer key={offer.id} offer={offer} />
	})

	return (
		<BrowserRouter>
			<>
				<header>
					<Navbar />
				</header>
				<main>
				<Routes>
					<Route
						path="/"
						element={[
							<Hero />,
							<MainOne />,
							<div className="bg-secondary">
								<MainTwo />,
								<section className="flex flex-wrap md:gap-2 justify-center m-auto p-1 max-w-[1366px] ">
									{valuesYoga}
								</section>
								<MainThree />,
							</div>,
							<AboutMain />,
							<div className="bg-secondary p-8">
								<MainFour />,
								<section className="flex flex-wrap md:gap-2 lg:gap-0 justify-center m-auto lg:max-w-[1366px]">
									{clientsType}
								</section>
							</div>,
							// <div className="bg-primary">
							// 	<Recommendation reviews={dataRecommendation} />
							// </div>,
							<div className="pt-10">
								<MainFive />,
								<section className="flex flex-wrap justify-center m-auto text-center my-6 px-10 lg:w-1/2 md:w-max-[1366px]">
									{trainingOffer}
								</section>
								<MainFiveButton />
							</div>,
							<StartToday />,
							<StayWithMe />,
							<Footer />,
						]}
					/>
					,
					<Route
						path="/o-mnie"
						element={[
							<AboutOne />,
							<section className="bg-secondary">
								<AboutTwo />
							</section>,
							<AboutFour />,
							<AboutFive />,
							<AboutSeven />,
							<AboutEight />,
							<Footer />,
						]}
					/>
					,
					<Route
						path="/cwicz-ze-mna"
						element={[
							<WithMeOne />,
							<WithMeTwo />,
							<section className="bg-secondary">
								<WithMeThree />,
								<div>
									<WithMeCalendar />,
								</div>
							</section>,
							<div className="bg-primary">
								<WithMeFour />,
								<Footer />
							</div>,
						]}
					/>
					,
					<Route path="/kontakt" element={<Contact />} />
				</Routes>
				</main>
			</>
		</BrowserRouter>
	)
}

export default App
