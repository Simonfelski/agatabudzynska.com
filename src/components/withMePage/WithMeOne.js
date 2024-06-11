import React from 'react'

const WithMeOne = () => {
	return (
		<div>
			<div className="text-center py-5 lg:py-20 lg:flex max-w-[1366px] m-auto lg:gap-10">
				<div>
					<h2 className="px-5 pb-5 font-bold text-center text-xl md:text-2xl lg:text-left">
						Masz ochotę na wspólną praktykę?
					</h2>
					<p className="px-5 pb-5 text-left md:text-lg lg:ml-10 lg:pt-10">
						Prowadzę zajęcia grupowe i indywidualne. Organizuję warsztaty wyjazdowe oraz stacjonarne warsztaty dla firm.
						Sprawdź w kalendarzu, co planuję w najbliższym czasie. Zerknij też niżej i zdecyduj, czy bardziej odpowiada
						Ci joga dla każdego, trening medyczny, vinyasa joga, yin joga czy joga nidra.
					</p>
				</div>
				<div className="">
					<img src="../images/withMePage/withMe1.png" alt="" />
				</div>
			</div>
			<hr className=" hidden lg:block lg:m-auto border-[black] border-1 lg:max-w-[1366px]" />
		</div>
	)
}

export default WithMeOne
