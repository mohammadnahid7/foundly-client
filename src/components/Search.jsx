import { PiMagnifyingGlassBold } from "react-icons/pi";

const Search = () => {
	return (
		<>
			<>
				{/* Hero */}
				<section className="relative overflow-hidden">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
						<div className="text-center">
							<h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
								Find Your Stuffs
							</h1>
							<p className="mt-3 max-w-3xl mx-auto text-gray-600 dark:text-neutral-400">
								Use our powerful search and filters to locate lost or found items quickly. Just type in keywords,
								select categories, or refine by location to narrow down your search.
							</p>
							<div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
								<div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
									<div className="w-full">
										<label className="block text-sm text-gray-700 font-medium dark:text-white">
											<span className="sr-only">Search by item name, description, or location...</span>
										</label>
										<input
											type="email"
											className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
											placeholder="Search by item name, description, or location..."
										/>
									</div>
									<div>
										<button
											type="button"
											className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
											<PiMagnifyingGlassBold className="size-5" />
										</button>
									</div>
								</div>
							</div>

							{/* Categories */}
							<div className="mt-10 sm:mt-20">
								<span
									className="m-1 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Business
								</span>
								<span
									className="m-1 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Business
								</span>
								<span
									className="m-1 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Business
								</span>
								<span
									className="m-1 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Business
								</span>
								<span
									className="m-1 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Business
								</span>
							</div>
						</div>
					</div>
				</section>
				{/* End Hero */}
			</>
		</>
	);
};

export default Search;
