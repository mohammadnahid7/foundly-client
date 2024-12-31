import * as Toggle from "@radix-ui/react-toggle";
import { useContext } from "react";
import { PiListDashesBold, PiMagnifyingGlassBold, PiSquaresFour } from "react-icons/pi";
import ReportGrid from "../components/ReportGrid";
import { ReportsViewContext } from "../contexts/ReportsViewProvider";
import { defaultTexts } from "../utils/DefaultTexts";

const FoundReportsPage = () => {
	const { reportsViewMode, setReportsViewMode } = useContext(ReportsViewContext);

	return (
		<>
			<section className="relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
					<div className="text-center">
						<h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
							All Reports
						</h1>
						<p className="mt-3 max-w-3xl mx-auto text-gray-600 dark:text-neutral-400">
							Browse the latest lost and found items. Someone might be looking for your help or have found what
							you’ve lost!
						</p>
						<div className="max-w-xl mx-auto mt-16">
							<div className="p-4 border-b border-gray-200 dark:border-neutral-700">
								{/* Input */}
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
										<PiMagnifyingGlassBold className="size-4" />
									</div>
									<div className="flex items-center gap-x-2">
										<div className="grow relative">
											<input
												type="text"
												className="py-2 ps-10 pe-8 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
												placeholder="Search or type a command"
											/>
										</div>

										<button
											type="button"
											className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500">
											Search
										</button>
										<Toggle.Root asChild>
											{reportsViewMode == defaultTexts.reportsGridView ? (
												<button
													onClick={() => setReportsViewMode(defaultTexts.reportsListView)}
													type="button"
													className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
													<PiListDashesBold className="size-4" /> List View
												</button>
											) : (
												<button
													onClick={() => setReportsViewMode(defaultTexts.reportsGridView)}
													type="button"
													className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
													<PiSquaresFour className="size-4" /> Grid View
												</button>
											)}
										</Toggle.Root>
									</div>
								</div>
								{/* End Input */}
								{/* Button Group */}
								<div className="mt-5 gap-1 sm:gap-2">
									{/* Tag Group */}
									<div className="flex flex-wrap gap-1 sm:gap-2">
										<button
											type="button"
											className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
											Bag
										</button>
										<button
											type="button"
											className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
											Bag
										</button>
										<button
											type="button"
											className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
											Bag
										</button>
										<button
											type="button"
											className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
											Bag
										</button>
									</div>
								</div>
								{/* End Button Group */}
							</div>
						</div>

						<ReportGrid className="mt-16" />
					</div>
				</div>
			</section>
		</>
	);
};

export default FoundReportsPage;
