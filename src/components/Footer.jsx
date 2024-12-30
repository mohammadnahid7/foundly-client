import { PiFacebookLogoBold, PiGoogleLogoBold, PiTwitterLogoBold } from "react-icons/pi";

const Footer = () => {
	return (
		<>
			<>
				{/* ========== FOOTER ========== */}
				<footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
					{/* Grid */}
					<div className="text-center max-w-7xl mx-auto">
						<div>
							<a className="flex-none text-xl font-semibold text-white dark:text-white" href="#" aria-label="Brand">
								Brand
							</a>
						</div>
						{/* End Col */}
						<div className="mt-3">
							<p className="text-gray-500 dark:text-neutral-500">
								We're part of the{" "}
								<a
									className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
									href="#">
									Htmlstream
								</a>{" "}
								family.
							</p>
							<p className="text-gray-500 dark:text-neutral-500">© 2024 Preline Labs.</p>
						</div>
						{/* Social Brands */}
						<div className="mt-3 space-x-2">
							<a
								className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
								href="#">
								<PiGoogleLogoBold className="size-4" />
							</a>
							<a
								className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
								href="#">
								<PiFacebookLogoBold className="size-4" />
							</a>
							<a
								className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
								href="#">
								<PiTwitterLogoBold className="size-4" />
							</a>
						</div>
						{/* End Social Brands */}
					</div>
					{/* End Grid */}
				</footer>
				{/* ========== END FOOTER ========== */}
			</>
		</>
	);
};

export default Footer;
