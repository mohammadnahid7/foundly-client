const ReportDetailsPage = () => {
	return (
		<>
			<section className="relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
					<div className="text-center">
						<h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
							Found A Bag
						</h1>
						<p className="mt-3 max-w-3xl mx-auto text-gray-600 dark:text-neutral-400">
							Browse the latest lost and found items. Someone might be looking for your help or have found what
							you’ve lost!
						</p>
					</div>
					<div className="mt-16">
						<img
							src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
							alt=""
							className="w-full md:w-2/3 h-96 mx-auto"
						/>
						<div className="flex flex-col mt-16 max-w-2xl mx-auto">
							<div className="-m-1.5 overflow-x-auto">
								<div className="p-1.5 min-w-full inline-block align-middle">
									<div className="overflow-hidden !rounded-md border border-gray-200">
										<table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
											<tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
												<tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
														John Brown
													</td>
													<td className="px-6 py-4 text-end whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
														45
													</td>
												</tr>
												<tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
														John Brown
													</td>
													<td className="px-6 py-4 text-end whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
														45
													</td>
												</tr>
												<tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
														John Brown
													</td>
													<td className="px-6 py-4 text-end whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
														45
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-16 text-center">
							<button
								type="button"
								className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
								Found This
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ReportDetailsPage;
