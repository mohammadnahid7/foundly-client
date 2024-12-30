const Process = () => {
	return (
		<>
			<section className="relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
					<div className="text-center">
						<h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
							How It Works
						</h1>
						<p className="mt-3 max-w-3xl mx-auto text-gray-600 dark:text-neutral-400">
							Finding or returning lost items is simple and quick. Just follow these steps!
						</p>
						<div className="w-full flex justify-center">
							{/* Timeline */}
							<div className="text-left mt-16 max-w-3xl">
								{/* Item */}
								<div className="group relative flex gap-x-5">
									{/* Icon */}
									<div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
										<div className="relative z-10 size-6 flex justify-center items-center">
											<span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
												<span className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
											</span>
										</div>
									</div>
									{/* End Icon */}
									{/* Right Content */}
									<div className="grow pb-8 group-last:pb-0">
										<p className="font-semibold text-lg text-gray-800 dark:text-neutral-200">Post an Item</p>
										<p className="mt-1 text-md font-medium text-gray-600 dark:text-neutral-400">
											Lost something? Report it! Found something? Let others know!
										</p>
										<ul className="list-disc ms-6 mt-3 space-y-1.5">
											<li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
												Fill out a simple form with details like the item’s name, description, location,
												and a photo.
											</li>
											<li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
												Mark it as "Lost" or "Found" so others can identify it easily.
											</li>
										</ul>
									</div>
									{/* End Right Content */}
								</div>
								<div className="group relative flex gap-x-5">
									{/* Icon */}
									<div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
										<div className="relative z-10 size-6 flex justify-center items-center">
											<span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
												<span className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
											</span>
										</div>
									</div>
									{/* End Icon */}
									{/* Right Content */}
									<div className="grow pb-8 group-last:pb-0">
										<p className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
											Search and Browse
										</p>
										<p className="mt-1 text-md font-medium text-gray-600 dark:text-neutral-400">
											Explore the platform to match lost items with their owners or found items with those
											searching for them.
										</p>
										<ul className="list-disc ms-6 mt-3 space-y-1.5">
											<li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
												Use the search bar or filter by categories and locations to refine your search.
											</li>
											<li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
												Recent items are displayed on the homepage for quick access.
											</li>
										</ul>
									</div>
									{/* End Right Content */}
								</div>
								<div className="group relative flex gap-x-5">
									{/* Icon */}
									<div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
										<div className="relative z-10 size-6 flex justify-center items-center">
											<span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
												<span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
											</span>
										</div>
									</div>
									{/* End Icon */}
									{/* Right Content */}
									<div className="grow pb-8 group-last:pb-0">
										<p className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
											Connect and Resolve
										</p>
										<p className="mt-1 text-md font-medium text-gray-600 dark:text-neutral-400">
											Contact the poster directly to return or claim the item.
										</p>
										<ul className="list-disc ms-6 mt-3 space-y-1.5">
											<li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
												Use the provided contact details to reach out securely.
											</li>
											<li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
												Work together to verify ownership and reunite the item with its rightful owner.
											</li>
										</ul>
									</div>
									{/* End Right Content */}
								</div>
							</div>
							{/* End Timeline */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Process;
