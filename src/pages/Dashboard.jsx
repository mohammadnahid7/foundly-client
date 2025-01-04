import * as Tabs from "@radix-ui/react-tabs";
import { useContext, useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { PiCaretLeftBold, PiCaretRightBold, PiMagnifyingGlassBold, PiPencilSimpleBold, PiXBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import TableBody from "../components/common/TableBody";
import AuthContext from "../context/contexts";
import useAxios from "../hooks/useAxios";
import { routes } from "../utils/DefaultTexts";

const Dashboard = () => {
	const [myReports, setMyReports] = useState([]);
	const { user } = useContext(AuthContext);
	const axios = useAxios();

	useEffect(() => {
		axios
			.get(`/dashboard?uid=${localStorage.getItem("uid")}`)
			.then((res) => {
				setMyReports(res.data);
			})
			.catch((err) => {
				// console.log(err);
			});
	}, [axios]);

	const openUpdateModal = (idx) => {
		// setUpdateModalData([items[idx], true]);
	};
	const closeUpdateModal = async () => {
		// const result = await axios.get(`https://foundly-server.vercel.app/dashboard?uid=${localStorage.getItem("uid")}`);
		// setItems(result.data);
		// setUpdateModalData([{}, false]);
	};

	const openDeleteModal = (idx) => {
		// setDeleteModalData([items[idx], true]);
	};
	const closeDeleteModal = async () => {
		// const result = await axios.get(`https://foundly-server.vercel.app/dashboard?uid=${localStorage.getItem("uid")}`);
		// setItems(result.data);
		// setDeleteModalData([{}, false]);
	};

	// // Handle file selection
	// const handleFileChange = (event) => {
	// 	const files = Array.from(event.target.files);
	// 	const newImages = files.map((file) => ({
	// 		file,
	// 		preview: URL.createObjectURL(file),
	// 	}));
	// 	setImages((prev) => [...prev, ...newImages]);
	// };
	// // Handle file deletion
	// const handleDelete = (index) => {
	// 	setImages((prev) => prev.filter((_, i) => i !== index));
	// };

	return (
		<>
			{/* <Helmet>
				<title>Dashboard</title>
			</Helmet> */}
			<section className="w-full">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
					<div className="dx5bd w682d v869m dpq4d a11ya k8i8d it6u8 dark:bg-neutral-800 dark:border-neutral-700">
						<figure className="bg-gray-200 h-40 rounded-xl"></figure>

						<div className="-mt-24">
							<div className="relative flex a8z2b lqr09 ha88l jcdwi vvxoz a3ufl dark:border-neutral-800">
								<img className="xa3ev dg83s a3ufl" src={user?.photoURL} alt="Hero Image" />
								<div className="absolute gu7a8 -end-2">
									<button
										type="button"
										className="group z1r3e nhg9k xgqt9 q6rsd items-center x60sp u4pm7 v869m dpq4d a11ya b7vor ps4xk ivg4u a3ufl lslrf k8i8d a2xg7 e1tdc sbnko tc0ip dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
										<PiPencilSimpleBold className="size-4" />
									</button>
								</div>
							</div>
							<div className="aruu0 bx4k9">
								<h1 className="ck20m u2ysm b7vor dark:text-neutral-200">{user?.displayName}</h1>
							</div>
						</div>

						<div className="g7czo kbyg3 ahaiz wwu1y lslrf lsu1p ap57u ed578 el1lk my2de peqgl dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
							<Tabs.Root defaultValue="tab2">
								<Tabs.List className="space-x-1">
									<Tabs.Trigger value="tab1" asChild>
										<button className="rc0sp eh7as relative xgqt9 items-center wwu1y ql6ky oxyct in0m6 hac7f lslrf xroga oekgx z50zr sbnko tc0ip ttzph or6de vuqtm dlvrw bv6m6 djrpp dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  active">
											Profile
										</button>
									</Tabs.Trigger>
									<Tabs.Trigger value="tab2" asChild className="data-[state=active]:bg-gray-100">
										<button className="rc0sp eh7as relative xgqt9 items-center wwu1y ql6ky oxyct in0m6 hac7f lslrf xroga oekgx z50zr sbnko tc0ip ttzph or6de vuqtm dlvrw bv6m6 djrpp dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  active">
											My Reports
										</button>
									</Tabs.Trigger>
								</Tabs.List>

								<Tabs.Content
									className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
									value="tab1">
									<div>
										<form className="text-left">
											<div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
												<div className="sm:col-span-3">
													<label
														htmlFor="displayName"
														className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
														Name
													</label>
												</div>
												<div className="sm:col-span-9">
													<input
														id="displayName"
														type="text"
														className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
														defaultValue={user?.displayName}
														disabled
													/>
												</div>
												<div className="sm:col-span-3">
													<label
														htmlFor="email"
														className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
														Email
													</label>
												</div>
												<div className="sm:col-span-9">
													<input
														id="email"
														type="email"
														className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
														defaultValue={user?.email}
														disabled
													/>
												</div>
											</div>
										</form>
									</div>
								</Tabs.Content>

								<Tabs.Content className="grow rounded-b-md bg-white outline-none mt-5 " value="tab2">
									<div className="flex justify-center">
										<div className="a6a2o nkoh0 flex ao3ns nz7b4 qm5z2 qm0vp fwpr6 u33oi dark:bg-neutral-800 dark:border-neutral-700">
											<div className="ccbuw ry5ci ygi9h df7qc zttj5 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
												<div className="min-w-full xd86q oewy0">
													<div className="emlw3 flex dr3q9 v869m k8i8d it6u8 dark:bg-neutral-800 dark:border-neutral-700">
														<div className="zliy4 cwrq4 p63bl h3dje h2kxi e8apb x815m jujtl dark:border-neutral-700">
															<div>
																<div className="relative">
																	<div className="absolute rezcy f8uov flex items-center uqtfj zfk0a g87ie">
																		<PiMagnifyingGlassBold className="size-4 text-gray-500" />
																	</div>
																	<input
																		type="text"
																		className="x6v2g cj880 mq76t block w-full arrd8 rg6vy xroga hac7f h1ur8 xwans kjmk4 oekgx z50zr dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
																		placeholder="Search Item"
																	/>
																	<div className="absolute rezcy s0ojd flex items-center uqtfj d6ed7">
																		<button
																			type="button"
																			className="xgqt9 vpbnr q6rsd items-center n1je8 a3ufl oxyct k7eco sbnko uweqs dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
																			aria-label="Close">
																			<span className="yps74">Close</span>
																			<PiXBold className="size-3" />
																		</button>
																	</div>
																</div>
															</div>
														</div>

														<div>
															{myReports.length != 0 ? (
																<div className="mb-5">
																	<div className="lsu1p ed578 el1lk my2de peqgl dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
																		<div className="min-w-full dxkem a2xg7">
																			<TableBody items={myReports} />
																		</div>
																	</div>

																	<div className="fbpzv flex flex-wrap encm3 items-center ciztt">
																		<p className="hac7f dt7pj dark:text-neutral-200">
																			<span className="ivg4u">{myReports.length} </span>
																			<span className="vej1k dark:text-neutral-500">
																				results
																			</span>
																		</p>

																		<nav
																			className="flex qsj3b items-center c0yql"
																			aria-label="Pagination">
																			<button
																				type="button"
																				className="x2ue1 aeb2q fuiju rc0sp xgqt9 q6rsd items-center wwu1y hac7f xroga dt7pj bcacf oekgx z50zr sbnko s6nmp dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
																				aria-label="Previous">
																				<PiCaretLeftBold className="size-3" />
																				<span className="yps74">Previous</span>
																			</button>
																			<div className="flex items-center c0yql">
																				<span
																					className="x2ue1 aeb2q flex q6rsd items-center arrd8 dt7pj fuiju tm5do hac7f xroga oekgx z50zr dark:bg-neutral-700 dark:text-white"
																					aria-current="page">
																					1
																				</span>
																				<span className="x2ue1 flex q6rsd items-center vej1k fuiju c07hf hac7f dark:text-neutral-500">
																					of
																				</span>
																				<span className="x2ue1 flex q6rsd items-center vej1k fuiju c07hf hac7f dark:text-neutral-500">
																					1
																				</span>
																			</div>
																			<button
																				type="button"
																				className="x2ue1 aeb2q fuiju rc0sp xgqt9 q6rsd items-center wwu1y hac7f xroga dt7pj bcacf oekgx z50zr sbnko s6nmp dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
																				aria-label="Next">
																				<span className="yps74">Next</span>
																				<PiCaretRightBold className="size-3" />
																			</button>
																		</nav>
																	</div>
																</div>
															) : (
																<div
																	id="hs-pro-tabs-dut-archived"
																	className="block"
																	role="tabpanel"
																	aria-labelledby="hs-pro-tabs-dut-item-archived">
																	<div className="dx5bd  flex dr3q9 q6rsd items-center bx4k9">
																		<div className="uvzen ha88l">
																			<p className="yvhh6 ivg4u dt7pj dark:text-neutral-200">
																				No Reports here
																			</p>
																			<p className="lilhu hac7f vej1k dark:text-neutral-500">
																				Create new report!
																			</p>
																		</div>
																		<Link
																			to={routes.postReport}
																			className="fuiju tm5do xgqt9 items-center wwu1y hac7f ivg4u xroga dpq4d jujtl v869m dt7pj k8i8d ze1zv oekgx z50zr sbnko pfxy3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
																			Post Report
																		</Link>
																	</div>
																</div>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Tabs.Content>
							</Tabs.Root>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
