import { PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { routes } from "../utils/DefaultTexts";

const Hero = () => {
	return (
		<>
			<>
				<header className="relative h-[60vh] md:h-[75vh] bg-[url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg')] bg-cover">
					<div className="block w-full h-full absolute top-0 left-0 bg-black bg-opacity-80 z-[0]"></div>
					<div className="relative max-w-7x h-full z-[1] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 flex flex-col justify-center">
						<div className="max-w-4xl text-center mx-auto">
							<h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
								Let’s Reunite People with Their Belongings!
							</h1>
						</div>
						<div className="max-w-4xl text-center mx-auto">
							<p className="text-lg text-white/70">
								Discover a platform dedicated to helping you find what’s missing or return what you’ve found.
								Whether it's a misplaced phone, a lost pet, or a forgotten backpack, we’re here to connect you
								with the rightful owner.
							</p>
						</div>
						<div className="text-center space-y-2 md:space-x-5">
							<Link
								className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
								to={routes.lostReports}>
								Browse Lost Items
								<PiCaretRightBold className="size-4" />
							</Link>
							<Link
								to={routes.foundReports}
								className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 py-2 ps-4 pe-2 rounded-full shadow-md focus:outline-none focus:bg-white/10">
								<p className="me-2 text-white text-sm">Browse Found Items</p>
								<span className="group-hover:bg-white/10 py-1.5 px-1.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
									<PiCaretRightBold className="size-4" />
								</span>
							</Link>
						</div>
					</div>
				</header>
			</>
		</>
	);
};

export default Hero;
