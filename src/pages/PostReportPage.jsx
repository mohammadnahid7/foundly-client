import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PostReportPage = () => {
	const [startDate, setStartDate] = useState(new Date());
	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("Here");
		const form = new FormData(e.target);
		console.log(...form.values());
	};
	return (
		<>
			<section className="relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
					<div className="text-center">
						<h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
							Post New Report
						</h1>
						<p className="mt-3 max-w-3xl mx-auto text-gray-600 dark:text-neutral-400">
							Browse the latest lost and found items. Someone might be looking for your help or have found what
							you’ve lost!
						</p>
					</div>
					<div className="w-full max-w-lg mx-auto mt-8">
						<div className="bg-white shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<form onSubmit={handleFormSubmit}>
								<div className="py-2 sm:py-4 px-2">
									<div className="w-48 flex items-center justify-between mx-auto mb-8">
										Lost
										<Switch.Root
											className="relative h-12 w-20 cursor-default rounded-md border border-gray-300 bg-gray-100 outline-none data-[state=checked]:bg-emerald-100"
											style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
											<Switch.Thumb className="block size-10 translate-x-0.5 rounded-md bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-9" />
										</Switch.Root>
										Found
									</div>
									<div className="p-4 space-y-5">
										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="imageURL"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Image URL
												</label>
											</div>
											<div className="sm:col-span-9">
												<input
													id="imageURL"
													name="imageURL"
													type="url"
													className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
													placeholder="Image URL"
													defaultValue=""
												/>
											</div>
										</div>

										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="title"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Title
												</label>
											</div>

											<div className="sm:col-span-9">
												<input
													id="title"
													name="title"
													type="text"
													className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
													placeholder="Found an I-Phone 16 Pro"
													defaultValue=""
												/>
											</div>
										</div>
										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="description"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Description
												</label>
											</div>

											<div className="sm:col-span-9">
												<textarea
													id="description"
													name="description"
													className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
													rows="3"
													placeholder="This is a textarea placeholder"></textarea>
											</div>
										</div>
										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="category"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Category
												</label>
											</div>

											<div className="sm:col-span-9">
												<select
													id="category"
													name="category"
													className="py-3 px-4 pe-9 block w-full bg-white border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
													<option defaultChecked>Select Category</option>
													<option>1</option>
													<option>2</option>
													<option>3</option>
												</select>
											</div>
										</div>

										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="location"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Location
												</label>
											</div>

											<div className="sm:col-span-9">
												<input
													id="location"
													name="location"
													type="text"
													className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
													placeholder="Location"
													defaultValue=""
												/>
											</div>
										</div>
										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="date"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Date
												</label>
											</div>

											<div className="sm:col-span-9">
												<DatePicker
													id="date"
													name="date"
													className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
													selected={startDate}
													onChange={(date) => setStartDate(date)}
												/>
											</div>
										</div>

										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="email"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Email
												</label>
											</div>

											<div className="sm:col-span-9 space-y-3">
												<div className="space-y-3">
													<input
														id="email"
														name="email"
														type="email"
														className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
														defaultValue="johndoe@gmail.com"
														disabled
													/>
												</div>
											</div>
										</div>
										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor="name"
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Name
												</label>
											</div>

											<div className="sm:col-span-9 space-y-3">
												<div className="space-y-3">
													<input
														id="name"
														name="name"
														type="text"
														disabled
														className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
														defaultValue="John Doe"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="p-6 pt-0 flex justify-end gap-x-2">
									<div className="w-full flex justify-end items-center gap-x-2">
										<button
											type="button"
											className="py-2 px-3 inline-flex justify-center items-center gxh7t bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
											Cancel
										</button>
										<button
											type="submit"
											className="py-2 px-3 inline-flex justify-center items-center gap-x-2 gxh7t bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500">
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PostReportPage;
