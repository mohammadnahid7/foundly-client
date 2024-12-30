import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PiArrowUpRightBold, PiChatCircleDotsBold, PiStarBold } from "react-icons/pi";
import { RxPencil2, RxTrash } from "react-icons/rx";
import { Link } from "react-router-dom";
const ReportCard = () => {
	return (
		<>
			<div className="flex flex-col bg-white border shadow-md border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
				<div className="shrink-0 h-24 bg-pink-200 dark:bg-pink-800 rounded-t-xl" />
				{/* Avatar */}
				<div className="-mt-8 px-4 mb-3">
					<div className="relative flex items-center gap-x-3">
						<div className="relative w-20">
							<span className="flex shrink-0 justify-center items-center size-20 bg-pink-200 text-pink-800 dark:bg-pink-800 dark:text-white text-2xl font-medium uppercase rounded-3xl ring-4 ring-white dark:ring-neutral-800">
								D
							</span>
						</div>

						<div className="absolute bottom-2 end-0">
							{/* Button Group */}
							<div className="h-full flex justify-end items-end gap-x-2">
								{/* Button */}
								<Tooltip.Provider>
									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<button
												type="button"
												className="flex justify-center items-center gap-x-3 size-7 text-sm border border-gray-200 text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
												<PiStarBold className="size-4" />
											</button>
										</Tooltip.Trigger>
										<Tooltip.Portal>
											<Tooltip.Content
												className="select-none rounded bg-gray-50 border border-gray-200 px-[10px] py-1.5 text-xs leading-none text-violet11 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
												sideOffset={5}>
												Add to Favorite
												<Tooltip.Arrow className="fill-white" />
											</Tooltip.Content>
										</Tooltip.Portal>
									</Tooltip.Root>
								</Tooltip.Provider>

								<div className="  [--strategy:absolute] [--placement:bottom-right] relative inline-flex">
									{/* More Dropdown */}
									<DropdownMenu.Root>
										<DropdownMenu.Trigger asChild>
											<button
												type="button"
												className="flex justify-center items-center gap-x-3 size-7 text-sm border border-gray-200 text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
												<svg
													className="shrink-0 size-3"
													xmlns="http://www.w3.org/2000/svg"
													width={24}
													height={24}
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round">
													<circle cx={12} cy={12} r={1} />
													<circle cx={19} cy={12} r={1} />
													<circle cx={5} cy={12} r={1} />
												</svg>
											</button>
										</DropdownMenu.Trigger>

										<DropdownMenu.Portal>
											<DropdownMenu.Content
												className="min-w-36 rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
												sideOffset={10}
												align="end">
												<DropdownMenu.Item>
													<button
														type="button"
														className="w-full flex items-center gap-x-2 py-1 px-2 rounded-lg text-xs text-blue-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
														<RxPencil2 className="size-4" />
														Edit
													</button>
												</DropdownMenu.Item>
												<DropdownMenu.Item>
													<button
														type="button"
														className="w-full flex items-center gap-x-2 py-1 px-2 rounded-lg text-xs text-red-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
														<RxTrash className="size-4" />
														Delete
													</button>
												</DropdownMenu.Item>
											</DropdownMenu.Content>
										</DropdownMenu.Portal>
									</DropdownMenu.Root>
								</div>
							</div>
							{/* End Button Group */}
						</div>
					</div>
				</div>
				{/* End Avatar */}
				{/* Body */}
				<div className="p-4 h-full text-left">
					<h2 className="mb-2 font-medium text-gray-800 dark:text-neutral-300">Daniel Hobbs</h2>
					{/* List */}
					<dl className="grid grid-cols-2 gap-x-2">
						<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Role:</dt>
						<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
							Mobile Developer
						</dd>
						<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Phone:</dt>
						<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
							+1 000-00-00
						</dd>
						<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Email:</dt>
						<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
							daniel@email.com
						</dd>
						<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Hourly price:</dt>
						<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
							$50
						</dd>
					</dl>
					{/* End List */}
					{/* Tags Group */}
					<div className="mt-3 flex flex-wrap gap-1">
						<span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs rounded-md bg-white border border-gray-200 text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
							App
						</span>
						<span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs rounded-md bg-white border border-gray-200 text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
							Mobile
						</span>
						<span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs rounded-md bg-white border border-gray-200 text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
							iOS
						</span>
						<span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs rounded-md bg-white border border-gray-200 text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
							Tool
						</span>
					</div>
				</div>
				<div className="py-3 px-4 flex items-center gap-x-3 border-t border-gray-200 dark:border-neutral-700">
					<button
						type="button"
						className="w-full py-2 px-2 inline-flex justify-center items-center gbe75 text-[13px] font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
						<PiChatCircleDotsBold className="size-4 mr-1" />
						Contact
					</button>
					<Link className="w-full flex justify-center items-center gbe75 py-2 px-2 border border-transparent bg-teal-600 font-medium text-[13px] text-white hover:bg-teal-700 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-teal-700 dark:border-transparent dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:bg-teal-600">
						View Details
						<PiArrowUpRightBold className="size-4 ml-1" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default ReportCard;
