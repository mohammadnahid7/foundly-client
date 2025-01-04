import * as Tabs from "@radix-ui/react-tabs";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import {
	PiArrowDownBold,
	PiArrowUpBold,
	PiArrowUpRightBold,
	PiBookmarkBold,
	PiCaretLeftBold,
	PiCaretRightBold,
	PiCaretUpDownBold,
	PiMagnifyingGlassBold,
	PiPencilSimpleBold,
	PiTrashBold,
	PiUserBold,
	PiXBold,
} from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import TableBody from "../components/common/TableBody";
import AuthContext from "../context/contexts";

const items = [
	{
		author_meta: {
			uid: "user123",
			displayName: "John Doe",
			photoURL: "https://example.com/photos/user123.jpg",
		},
		title: "Lost: Black Wallet",
		type: "lost",
		description: "A black leather wallet with several cards and some cash inside.",
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
		category: "Accessories",
		location: "Downtown Library",
		reportedDate: "2024-12-29T10:00:00Z",
		recoveryId: "rec123",
		status: "active",
		metadata: {
			created_at: "2024-12-29T09:30:00Z",
			updated_at: "2024-12-29T09:30:00Z",
		},
	},
	{
		author_meta: {
			uid: "user456",
			displayName: "Jane Smith",
			photoURL: "https://example.com/photos/user456.jpg",
		},
		title: "Found: Set of Keys",
		type: "found",
		description: "A set of three keys found near the park bench.",
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
		category: "Keys",
		location: "Central Park",
		reportedDate: "2024-12-28T15:00:00Z",
		recoveryId: "rec456",
		status: "pending",
		metadata: {
			created_at: "2024-12-28T14:45:00Z",
			updated_at: "2024-12-28T14:45:00Z",
		},
	},
	{
		author_meta: {
			uid: "user789",
			displayName: "Alice Johnson",
			photoURL: "https://example.com/photos/user789.jpg",
		},
		title: "Lost: Golden Retriever",
		type: "lost",
		description: "A friendly golden retriever wearing a red collar. Answers to 'Buddy.'",
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
		category: "Pets",
		location: "Elm Street",
		reportedDate: "2024-12-27T08:00:00Z",
		recoveryId: "rec789",
		status: "active",
		metadata: {
			created_at: "2024-12-27T07:45:00Z",
			updated_at: "2024-12-27T07:45:00Z",
		},
	},
	{
		author_meta: {
			uid: "user321",
			displayName: "Michael Brown",
			photoURL: "https://example.com/photos/user321.jpg",
		},
		title: "Found: Black Backpack",
		type: "found",
		description: "A black backpack containing books and a laptop charger.",
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
		category: "Bags",
		location: "Subway Station A",
		reportedDate: "2024-12-26T19:00:00Z",
		recoveryId: "rec321",
		status: "recovered",
		metadata: {
			created_at: "2024-12-26T18:45:00Z",
			updated_at: "2024-12-27T10:00:00Z",
		},
	},
	{
		author_meta: {
			uid: "user654",
			displayName: "Emily Davis",
			photoURL: "https://example.com/photos/user654.jpg",
		},
		title: "Lost: iPhone 13",
		type: "lost",
		description: "A blue iPhone 13 with a cracked screen protector. Last seen at the café.",
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
		category: "Electronics",
		location: "City Café",
		reportedDate: "2024-12-25T12:00:00Z",
		recoveryId: "rec654",
		status: "active",
		metadata: {
			created_at: "2024-12-25T11:45:00Z",
			updated_at: "2024-12-25T11:45:00Z",
		},
	},
];

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	// const data = useLoaderData();
	// const [items, setItems] = useState(data);
	// const [recoveredItems, setRecoveredItems] = useState(data.filter((e) => e.status == "recovered"));
	const recoveredItems = [1, 2, 3];
	const [images, setImages] = useState([]);
	const [startDate, setStartDate] = useState(new Date());
	const [updateModalData, setUpdateModalData] = useState([{}, false]);
	const [deleteModalData, setDeleteModalData] = useState([{}, false]);
	// console.log(user?.uid);
	useEffect(() => {
		axios
			.get(`https://foundly-server.vercel.app/dashboard?uid=${user?.uid}`)
			.then((res) => {
				console.log(res.data[0]);
			})
			.catch((err) => {
				// console.log(err);
			});
	}, [user?.uid]);

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
						<figure className="bg-red-500 h-40 rounded-xl"></figure>

						<div className="-mt-24">
							<div className="relative flex a8z2b lqr09 ha88l jcdwi vvxoz a3ufl dark:border-neutral-800">
								<img
									className="xa3ev dg83s a3ufl"
									src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
									alt="Hero Image"
								/>
								<div className="absolute gu7a8 -end-2">
									<button
										type="button"
										className="group z1r3e nhg9k xgqt9 q6rsd items-center x60sp u4pm7 v869m dpq4d a11ya b7vor ps4xk ivg4u a3ufl lslrf k8i8d a2xg7 e1tdc sbnko tc0ip dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
										<PiPencilSimpleBold className="size-4" />
									</button>
								</div>
							</div>
							<div className="aruu0 bx4k9">
								<h1 className="ck20m u2ysm b7vor dark:text-neutral-200">Amanda Harvey</h1>
								<p className="oxyct dark:text-neutral-500">iam_amanda</p>
							</div>
						</div>

						<div className="g7czo kbyg3 ahaiz wwu1y lslrf lsu1p ap57u ed578 el1lk my2de peqgl dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
							<Tabs.Root defaultValue="tab2">
								<Tabs.List className="space-x-1">
									<Tabs.Trigger value="tab1">
										<button className="rc0sp eh7as relative xgqt9 items-center wwu1y ql6ky oxyct in0m6 hac7f lslrf xroga oekgx z50zr sbnko tc0ip ttzph or6de vuqtm dlvrw bv6m6 djrpp dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  active">
											Profile
										</button>
									</Tabs.Trigger>
									<Tabs.Trigger value="tab2">
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
														placeholder="nahid@gmail.com"
													/>
												</div>

												<div className="sm:col-span-3">
													<label
														htmlFor="password"
														className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
														Password
													</label>
												</div>
												<div className="sm:col-span-9">
													<input
														id="password"
														type="password"
														className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
														placeholder="Password"
													/>
												</div>
											</div>

											<div className="mt-5 flex justify-end gap-x-2">
												<button
													type="button"
													className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none">
													Update Profile
												</button>
											</div>
										</form>
									</div>
								</Tabs.Content>

								<Tabs.Content className="grow rounded-b-md bg-white p-5 outline-none " value="tab2">
									<div className="flex justify-center">
										<div className="a6a2o nkoh0 flex ao3ns nz7b4 qm5z2 qm0vp fwpr6 u33oi dark:bg-neutral-800 dark:border-neutral-700">
											<div className="ccbuw ry5ci ygi9h df7qc zttj5 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
												<div className="min-w-full xd86q oewy0">
													<div className="dx5bd emlw3 flex dr3q9 v869m dpq4d jujtl k8i8d it6u8 dark:bg-neutral-800 dark:border-neutral-700">
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
															<div
																id="hs-pro-tabs-dut-all"
																role="tabpanel"
																aria-labelledby="hs-pro-tabs-dut-item-all">
																<div className="lsu1p ed578 el1lk my2de peqgl dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
																	<div className="min-w-full dxkem a2xg7">
																		<TableBody items={items} />
																	</div>
																</div>

																<div className="fbpzv flex flex-wrap encm3 items-center ciztt">
																	<p className="hac7f dt7pj dark:text-neutral-200">
																		<span className="ivg4u">{items.length} </span>
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

															<div
																id="hs-pro-tabs-dut-archived"
																className="hidden"
																role="tabpanel"
																aria-labelledby="hs-pro-tabs-dut-item-archived">
																<div className="dx5bd  flex dr3q9 q6rsd items-center bx4k9">
																	<svg
																		className="v8dnz ha88l owr0a"
																		width={178}
																		height={90}
																		viewBox="0 0 178 90"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg">
																		<rect
																			x={27}
																			y="50.5"
																			width={124}
																			height={39}
																			rx="7.5"
																			fill="currentColor"
																			className="scpqw dark:fill-neutral-800"
																		/>
																		<rect
																			x={27}
																			y="50.5"
																			width={124}
																			height={39}
																			rx="7.5"
																			stroke="currentColor"
																			className="ppyhx dark:stroke-neutral-700/10"
																		/>
																		<rect
																			x="34.5"
																			y={58}
																			width={24}
																			height={24}
																			rx={4}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="66.5"
																			y={61}
																			width={60}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="66.5"
																			y={73}
																			width={77}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="19.5"
																			y="28.5"
																			width={139}
																			height={39}
																			rx="7.5"
																			fill="currentColor"
																			className="scpqw dark:fill-neutral-800"
																		/>
																		<rect
																			x="19.5"
																			y="28.5"
																			width={139}
																			height={39}
																			rx="7.5"
																			stroke="currentColor"
																			className="eqgw6 dark:stroke-neutral-700/30"
																		/>
																		<rect
																			x={27}
																			y={36}
																			width={24}
																			height={24}
																			rx={4}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<rect
																			x={59}
																			y={39}
																			width={60}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<rect
																			x={59}
																			y={51}
																			width={92}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<g filter="url(#filter4)">
																			<rect
																				x={12}
																				y={6}
																				width={154}
																				height={40}
																				rx={8}
																				fill="currentColor"
																				className="scpqw dark:fill-neutral-800"
																				shapeRendering="crispEdges"
																			/>
																			<rect
																				x="12.5"
																				y="6.5"
																				width={153}
																				height={39}
																				rx="7.5"
																				stroke="currentColor"
																				className="eqgw6 dark:stroke-neutral-700/60"
																				shapeRendering="crispEdges"
																			/>
																			<rect
																				x={20}
																				y={14}
																				width={24}
																				height={24}
																				rx={4}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700 "
																			/>
																			<rect
																				x={52}
																				y={17}
																				width={60}
																				height={6}
																				rx={3}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700"
																			/>
																			<rect
																				x={52}
																				y={29}
																				width={106}
																				height={6}
																				rx={3}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700"
																			/>
																		</g>
																		<defs>
																			<filter
																				id="filter4"
																				x={0}
																				y={0}
																				width={178}
																				height={64}
																				filterUnits="userSpaceOnUse"
																				colorInterpolationFilters="sRGB">
																				<feFlood
																					floodOpacity={0}
																					result="BackgroundImageFix"
																				/>
																				<feColorMatrix
																					in="SourceAlpha"
																					type="matrix"
																					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
																					result="hardAlpha"
																				/>
																				<feOffset dy={6} />
																				<feGaussianBlur stdDeviation={6} />
																				<feComposite in2="hardAlpha" operator="out" />
																				<feColorMatrix
																					type="matrix"
																					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
																				/>
																				<feBlend
																					mode="normal"
																					in2="BackgroundImageFix"
																					result="effect1_dropShadow_1187_14810"
																				/>
																				<feBlend
																					mode="normal"
																					in="SourceGraphic"
																					in2="effect1_dropShadow_1187_14810"
																					result="shape"
																				/>
																			</filter>
																		</defs>
																	</svg>
																	<div className="uvzen ha88l">
																		<p className="yvhh6 ivg4u dt7pj dark:text-neutral-200">
																			Your data will appear here soon.
																		</p>
																		<p className="lilhu hac7f vej1k dark:text-neutral-500">
																			In the meantime, you can create new custom insights to
																			monitor your most dplju metrics.
																		</p>
																	</div>
																	<a
																		className="fuiju tm5do xgqt9 items-center wwu1y hac7f ivg4u xroga dpq4d jujtl v869m dt7pj k8i8d ze1zv oekgx z50zr sbnko pfxy3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
																		href="#"
																		target="_parent">
																		Learn more
																	</a>
																</div>
															</div>

															<div
																id="hs-pro-tabs-dut-publish"
																className="hidden"
																role="tabpanel"
																aria-labelledby="hs-pro-tabs-dut-item-publish">
																<div className="dx5bd  flex dr3q9 q6rsd items-center bx4k9">
																	<svg
																		className="v8dnz ha88l owr0a"
																		width={178}
																		height={90}
																		viewBox="0 0 178 90"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg">
																		<rect
																			x={27}
																			y="50.5"
																			width={124}
																			height={39}
																			rx="7.5"
																			fill="currentColor"
																			className="scpqw dark:fill-neutral-800"
																		/>
																		<rect
																			x={27}
																			y="50.5"
																			width={124}
																			height={39}
																			rx="7.5"
																			stroke="currentColor"
																			className="ppyhx dark:stroke-neutral-700/10"
																		/>
																		<rect
																			x="34.5"
																			y={58}
																			width={24}
																			height={24}
																			rx={4}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="66.5"
																			y={61}
																			width={60}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="66.5"
																			y={73}
																			width={77}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="19.5"
																			y="28.5"
																			width={139}
																			height={39}
																			rx="7.5"
																			fill="currentColor"
																			className="scpqw dark:fill-neutral-800"
																		/>
																		<rect
																			x="19.5"
																			y="28.5"
																			width={139}
																			height={39}
																			rx="7.5"
																			stroke="currentColor"
																			className="eqgw6 dark:stroke-neutral-700/30"
																		/>
																		<rect
																			x={27}
																			y={36}
																			width={24}
																			height={24}
																			rx={4}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<rect
																			x={59}
																			y={39}
																			width={60}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<rect
																			x={59}
																			y={51}
																			width={92}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<g filter="url(#filter5)">
																			<rect
																				x={12}
																				y={6}
																				width={154}
																				height={40}
																				rx={8}
																				fill="currentColor"
																				className="scpqw dark:fill-neutral-800"
																				shapeRendering="crispEdges"
																			/>
																			<rect
																				x="12.5"
																				y="6.5"
																				width={153}
																				height={39}
																				rx="7.5"
																				stroke="currentColor"
																				className="eqgw6 dark:stroke-neutral-700/60"
																				shapeRendering="crispEdges"
																			/>
																			<rect
																				x={20}
																				y={14}
																				width={24}
																				height={24}
																				rx={4}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700 "
																			/>
																			<rect
																				x={52}
																				y={17}
																				width={60}
																				height={6}
																				rx={3}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700"
																			/>
																			<rect
																				x={52}
																				y={29}
																				width={106}
																				height={6}
																				rx={3}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700"
																			/>
																		</g>
																		<defs>
																			<filter
																				id="filter5"
																				x={0}
																				y={0}
																				width={178}
																				height={64}
																				filterUnits="userSpaceOnUse"
																				colorInterpolationFilters="sRGB">
																				<feFlood
																					floodOpacity={0}
																					result="BackgroundImageFix"
																				/>
																				<feColorMatrix
																					in="SourceAlpha"
																					type="matrix"
																					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
																					result="hardAlpha"
																				/>
																				<feOffset dy={6} />
																				<feGaussianBlur stdDeviation={6} />
																				<feComposite in2="hardAlpha" operator="out" />
																				<feColorMatrix
																					type="matrix"
																					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
																				/>
																				<feBlend
																					mode="normal"
																					in2="BackgroundImageFix"
																					result="effect1_dropShadow_1187_14810"
																				/>
																				<feBlend
																					mode="normal"
																					in="SourceGraphic"
																					in2="effect1_dropShadow_1187_14810"
																					result="shape"
																				/>
																			</filter>
																		</defs>
																	</svg>
																	<div className="uvzen ha88l">
																		<p className="yvhh6 ivg4u dt7pj dark:text-neutral-200">
																			Your data will appear here soon.
																		</p>
																		<p className="lilhu hac7f vej1k dark:text-neutral-500">
																			In the meantime, you can create new custom insights to
																			monitor your most dplju metrics.
																		</p>
																	</div>
																	<a
																		className="fuiju tm5do xgqt9 items-center wwu1y hac7f ivg4u xroga dpq4d jujtl v869m dt7pj k8i8d ze1zv oekgx z50zr sbnko pfxy3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
																		href="#"
																		target="_parent">
																		Learn more
																	</a>
																</div>
															</div>

															<div
																id="hs-pro-tabs-dut-unpublish"
																className="hidden"
																role="tabpanel"
																aria-labelledby="hs-pro-tabs-dut-item-unpublish">
																<div className="dx5bd  flex dr3q9 q6rsd items-center bx4k9">
																	<svg
																		className="v8dnz ha88l owr0a"
																		width={178}
																		height={90}
																		viewBox="0 0 178 90"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg">
																		<rect
																			x={27}
																			y="50.5"
																			width={124}
																			height={39}
																			rx="7.5"
																			fill="currentColor"
																			className="scpqw dark:fill-neutral-800"
																		/>
																		<rect
																			x={27}
																			y="50.5"
																			width={124}
																			height={39}
																			rx="7.5"
																			stroke="currentColor"
																			className="ppyhx dark:stroke-neutral-700/10"
																		/>
																		<rect
																			x="34.5"
																			y={58}
																			width={24}
																			height={24}
																			rx={4}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="66.5"
																			y={61}
																			width={60}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="66.5"
																			y={73}
																			width={77}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="guynq dark:fill-neutral-700/30"
																		/>
																		<rect
																			x="19.5"
																			y="28.5"
																			width={139}
																			height={39}
																			rx="7.5"
																			fill="currentColor"
																			className="scpqw dark:fill-neutral-800"
																		/>
																		<rect
																			x="19.5"
																			y="28.5"
																			width={139}
																			height={39}
																			rx="7.5"
																			stroke="currentColor"
																			className="eqgw6 dark:stroke-neutral-700/30"
																		/>
																		<rect
																			x={27}
																			y={36}
																			width={24}
																			height={24}
																			rx={4}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<rect
																			x={59}
																			y={39}
																			width={60}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<rect
																			x={59}
																			y={51}
																			width={92}
																			height={6}
																			rx={3}
																			fill="currentColor"
																			className="bb4y9 dark:fill-neutral-700/70"
																		/>
																		<g filter="url(#filter6)">
																			<rect
																				x={12}
																				y={6}
																				width={154}
																				height={40}
																				rx={8}
																				fill="currentColor"
																				className="scpqw dark:fill-neutral-800"
																				shapeRendering="crispEdges"
																			/>
																			<rect
																				x="12.5"
																				y="6.5"
																				width={153}
																				height={39}
																				rx="7.5"
																				stroke="currentColor"
																				className="eqgw6 dark:stroke-neutral-700/60"
																				shapeRendering="crispEdges"
																			/>
																			<rect
																				x={20}
																				y={14}
																				width={24}
																				height={24}
																				rx={4}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700 "
																			/>
																			<rect
																				x={52}
																				y={17}
																				width={60}
																				height={6}
																				rx={3}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700"
																			/>
																			<rect
																				x={52}
																				y={29}
																				width={106}
																				height={6}
																				rx={3}
																				fill="currentColor"
																				className="y54zk dark:fill-neutral-700"
																			/>
																		</g>
																		<defs>
																			<filter
																				id="filter6"
																				x={0}
																				y={0}
																				width={178}
																				height={64}
																				filterUnits="userSpaceOnUse"
																				colorInterpolationFilters="sRGB">
																				<feFlood
																					floodOpacity={0}
																					result="BackgroundImageFix"
																				/>
																				<feColorMatrix
																					in="SourceAlpha"
																					type="matrix"
																					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
																					result="hardAlpha"
																				/>
																				<feOffset dy={6} />
																				<feGaussianBlur stdDeviation={6} />
																				<feComposite in2="hardAlpha" operator="out" />
																				<feColorMatrix
																					type="matrix"
																					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
																				/>
																				<feBlend
																					mode="normal"
																					in2="BackgroundImageFix"
																					result="effect1_dropShadow_1187_14810"
																				/>
																				<feBlend
																					mode="normal"
																					in="SourceGraphic"
																					in2="effect1_dropShadow_1187_14810"
																					result="shape"
																				/>
																			</filter>
																		</defs>
																	</svg>
																	<div className="uvzen ha88l">
																		<p className="yvhh6 ivg4u dt7pj dark:text-neutral-200">
																			Your data will appear here soon.
																		</p>
																		<p className="lilhu hac7f vej1k dark:text-neutral-500">
																			In the meantime, you can create new custom insights to
																			monitor your most dplju metrics.
																		</p>
																	</div>
																	<a
																		className="fuiju tm5do xgqt9 items-center wwu1y hac7f ivg4u xroga dpq4d jujtl v869m dt7pj k8i8d ze1zv oekgx z50zr sbnko pfxy3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
																		href="#"
																		target="_parent">
																		Learn more
																	</a>
																</div>
															</div>
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
