import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useContext } from "react";
import {
	PiArrowUpRightBold,
	PiChatCircleDotsBold,
	PiDotsThreeBold,
	PiPencilSimpleBold,
	PiStarBold,
	PiTrashBold,
} from "react-icons/pi";
import { RxPencil2, RxTrash } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ReportsViewContext } from "../../contexts/ReportsViewProvider";
import { defaultTexts } from "../../utils/DefaultTexts";
const ReportCard = () => {
	const { reportsViewMode } = useContext(ReportsViewContext);
	const isListMode = reportsViewMode == defaultTexts.reportsListView ? true : false;

	return (
		<>
			<div
				className={`${isListMode ? "flex-row max-w-4xl place-self-start md:place-self-center w-full min-w-[600px]" : "flex-col"} flex bg-white border shadow-md border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700`}>
				<div
					className={`${isListMode ? "w-32 md:w-40 rounded-l-xl" : "rounded-t-xl h-60"} shrink-0 bg-pink-200 dark:bg-pink-800`}
				/>

				{/* Body */}
				<div className={`${isListMode ? "flex-col items-left flex-1" : "flex-col"} p-4 h-full text-left flex relative`}>
					{isListMode || (
						<div className="absolute top-3 right-3 h-full flex justify-end items-start gap-x-2">
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
											<PiDotsThreeBold className="size-4" />
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
													className="w-full flex items-center gap-x-2 py-2 px-2 rounded-lg text-xs text-blue-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
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
					)}

					<div className={`${isListMode ? "flex-1 w-full" : "w-full mt-5"}`}>
						<h2 className={`${isListMode || "mb-2"} font-medium text-gray-800 dark:text-neutral-300`}>
							Daniel Hobbs
						</h2>
						<p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					{/* List */}
					<dl
						className={`${isListMode ? "*:inline-block text-left [&>dd+dt]:ml-4 mt-2" : "grid gap-x-2 grid-cols-2 mt-3"}`}>
						{isListMode || (
							<>
								<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Role:</dt>
								<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
									Mobile Developer
								</dd>
							</>
						)}
						<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Phone:</dt>
						<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
							+1 000-00-00
						</dd>
						<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Email:</dt>
						<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
							daniel@email.com
						</dd>
						{isListMode || (
							<>
								<dt className="py-1 text-sm text-gray-500 dark:text-neutral-500">Hourly price:</dt>
								<dd className="py-1 inline-flex justify-end items-center gap-x-2 text-end font-medium text-sm text-gray-800 dark:text-neutral-200">
									$50
								</dd>
							</>
						)}
					</dl>
					{/* End List */}
					{/* Tags Group */}
					{isListMode || (
						<>
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
						</>
					)}
				</div>
				{isListMode ? (
					<div className="flex items-stretch justify-center">
						<div className="inline-flex flex-col items-stretch justify-stretch h-auto gap-0 bg-whiterounded-lg rounded-l-none dark:bg-neutral-800">
							<button className="p-2 px-3 bg-blue-50 hover:bg-blue-100 rounded-t-lg rounded-l-none text-blue-700 h-full border border-blue-100">
								<PiPencilSimpleBold />
							</button>
							<button className="p-2 px-3 bg-green-50 hover:bg-green-100 rounded-l-none text-green-700 h-full border border-green-100">
								<PiArrowUpRightBold />
							</button>
							<button className="p-2 px-3 bg-red-50 hover:bg-red-100 rounded-b-lg rounded-l-none text-red-700 h-full border border-red-100">
								<PiTrashBold />
							</button>
						</div>
					</div>
				) : (
					<div
						className={`${isListMode && "flex-col gap-y-2 justify-center border-none"} py-3 px-4 flex items-center gap-x-3 border-t border-gray-200 dark:border-neutral-700`}>
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
				)}
			</div>
		</>
	);
};

export default ReportCard;
