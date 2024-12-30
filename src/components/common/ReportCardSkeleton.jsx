import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PiArrowUpRightBold, PiChatCircleDotsBold, PiStarBold } from "react-icons/pi";
import { RxPencil2, RxTrash } from "react-icons/rx";
import { Link } from "react-router-dom";
const ReportCardSkeleton = () => {
	return (
		<>
			<div className="flex flex-col bg-white border animate-pulse shadow-md border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
				<div className="shrink-0 h-24 bg-gray-200 dark:bg-pink-800 rounded-t-xl" />
				{/* Avatar */}
				<div className="-mt-8 px-4 mb-3">
					<div className="relative flex items-center gap-x-3">
						<div className="relative w-20">
							<span className="flex shrink-0 justify-center items-center size-20 bg-gray-200 text-pink-800 dark:bg-pink-800 dark:text-white text-2xl font-medium uppercase rounded-3xl ring-4 ring-white dark:ring-neutral-800"></span>
						</div>

						<div className="absolute bottom-2 end-0">
							{/* Button Group */}
							<div className="h-full flex justify-end items-end gap-x-2">
								{/* Button */}
								<span className="size-7 bg-gray-200 rounded-full"></span>
								<span className="size-7 bg-gray-200 rounded-full"></span>
							</div>
							{/* End Button Group */}
						</div>
					</div>
				</div>
				{/* End Avatar */}
				{/* Body */}
				<div className="p-4 h-full text-left">
					<span className="bg-gray-200 rounded-full w-56 h-5 block"></span>
					{/* List */}
					<dl className="grid grid-cols-2 gap-x-2 mt-2">
						<dt className="bg-gray-200 rounded-full w-48 h-5 block mt-2"></dt>
						<dd className="bg-gray-200 rounded-full place-self-end w-48 h-5 block"></dd>
						<dt className="bg-gray-200 rounded-full w-48 h-5 block mt-2"></dt>
						<dd className="bg-gray-200 rounded-full place-self-end w-48 h-5 block"></dd>
						<dt className="bg-gray-200 rounded-full w-48 h-5 block mt-2"></dt>
						<dd className="bg-gray-200 rounded-full place-self-end w-48 h-5 block"></dd>
					</dl>
					{/* End List */}
					{/* Tags Group */}
					<div className="flex flex-wrap gap-2 mt-5">
						<span className="bg-gray-200 rounded-lg w-16 h-8 block"></span>
						<span className="bg-gray-200 rounded-lg w-16 h-8 block"></span>
						<span className="bg-gray-200 rounded-lg w-16 h-8 block"></span>
					</div>
				</div>
				<div className="py-3 px-4 flex items-center gap-x-3 border-t border-gray-200 dark:border-neutral-700">
					<span className="bg-gray-200 rounded-lg w-full h-8 block"></span>
					<span className="bg-gray-200 rounded-lg w-full h-8 block"></span>
				</div>
			</div>
		</>
	);
};

export default ReportCardSkeleton;
