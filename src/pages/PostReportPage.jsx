import * as Switch from "@radix-ui/react-switch";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/contexts";
import useAxios from "../hooks/useAxios";
import { formKeyNames, routes } from "../utils/DefaultTexts";
const PostReportPage = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useContext(AuthContext);
	const axios = useAxios();
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		const form = new FormData(e.target);
		const newReport = {
			[formKeyNames.authormeta]: {
				[formKeyNames.uid]: user?.uid,
				[formKeyNames.displayName]: user?.displayName,
				[formKeyNames.photoURL]: user?.photoURL,
				[formKeyNames.email]: user?.email,
			},
			[formKeyNames.title]: form.get(formKeyNames.title),
			[formKeyNames.type]: form.get(formKeyNames.type) == null ? "lost" : "found",
			[formKeyNames.description]: form.get(formKeyNames.description),
			[formKeyNames.imageURL]: form.get(formKeyNames.imageURL),
			[formKeyNames.category]: form.get(formKeyNames.category),
			[formKeyNames.location]: form.get(formKeyNames.location),
			[formKeyNames.reportedDate]: startDate.getTime(),
		};
		axios.post("/reports", newReport).then((res) => {
			setIsLoading(false);
			navigate(routes.dashboard);
		});
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
					<div className="w-full max-w-2xl mx-auto mt-8">
						<div className="relative bg-white shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							{/* Loading screen */}
							<div
								className={`${isLoading || "hidden "} absolute bg-gray-100 opacity-70 w-full h-full flex items-center justify-center z-10`}>
								<span
									className="animate-spin inline-block size-16 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
									role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</span>
							</div>
							<form onSubmit={handleFormSubmit}>
								<div className="py-2 sm:py-4 px-2">
									<div className="w-48 flex items-center justify-between mx-auto mb-8">
										Lost
										<Switch.Root
											name="type"
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
													htmlFor={formKeyNames.imageURL}
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Image URL
												</label>
											</div>
											<div className="sm:col-span-9">
												<input
													id={formKeyNames.imageURL}
													name={formKeyNames.imageURL}
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
													htmlFor={formKeyNames.title}
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Title
												</label>
											</div>

											<div className="sm:col-span-9">
												<input
													id={formKeyNames.title}
													name={formKeyNames.title}
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
													htmlFor={formKeyNames.description}
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Description
												</label>
											</div>

											<div className="sm:col-span-9">
												<textarea
													id={formKeyNames.description}
													name={formKeyNames.description}
													className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
													rows="3"
													placeholder="This is a textarea placeholder"></textarea>
											</div>
										</div>
										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor={formKeyNames.category}
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Category
												</label>
											</div>

											<div className="sm:col-span-9">
												<select
													id={formKeyNames.category}
													name={formKeyNames.category}
													className="py-3 px-4 pe-9 block w-full bg-white border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
													<option defaultChecked>Select Category</option>
													<option>Bag</option>
													<option>Mobile</option>
													<option>Accessories</option>
												</select>
											</div>
										</div>

										<div className="grid sm:grid-cols-12 gap-y-1 sm:gap-y-0 sm:gap-x-5">
											<div className="sm:col-span-3">
												<label
													htmlFor={formKeyNames.location}
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Location
												</label>
											</div>

											<div className="sm:col-span-9">
												<input
													id={formKeyNames.location}
													name={formKeyNames.location}
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
													htmlFor={formKeyNames.reportedDate}
													className="sm:mt-2 inline-block text-sm text-gray-500 dark:text-neutral-500">
													Date
												</label>
											</div>

											<div className="sm:col-span-9">
												<DatePicker
													id={formKeyNames.reportedDate}
													name={formKeyNames.reportedDate}
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
														defaultValue={user?.email}
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
														defaultValue={user?.displayName}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="p-6 pt-0 flex justify-end gap-x-2">
									<div className="w-full flex justify-end items-center gap-x-2">
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
