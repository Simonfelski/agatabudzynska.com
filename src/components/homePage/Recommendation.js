// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// function Arrow(props) {
// 	const { className, style, onClick } = props
// 	return <div className={className} style={{ ...style, display: 'block', color: 'black', }} onClick={onClick} />
// }

// const Recommendation = props => {
// 	let settings = {
// 		dots: false,
// 		infinite: true,
// 		speed: 200,
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		arrows: false,
// 		// nextArrow: <Arrow />,
// 		// prevArrow: <Arrow />,
// 		initialSlide: 0,
// 		responsive: [
// 			{
// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 2,
// 				},
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 2,
// 				},
// 			},
// 			{
// 				breakpoint: 480,
// 				settings: {
// 					slidesToShow: 1,
// 				},
// 			},
// 		],
// 	}

// 	return (
// 		<div className="max-w-[1366px] m-auto text-[#fff]">
// 			<h2 className="text-center md:text-2xl pt-10 pb-5 font-bold mb-5 md:mb-10 "> Co mówią o mnie osoby, które prowadzę i uczę?</h2>
// 			<Slider {...settings}>
                
// 				{props.reviews.map(review => (
// 					<div key={review.id} className="p-12 text-center w-1/4">
// 						<p>{review.description}</p>
// 						<h3 className="pt-5 text-end">- {review.title}</h3>
// 					</div>
// 				))}
                
// 			</Slider>
// 		</div>
// 	)
// }

// export default Recommendation




