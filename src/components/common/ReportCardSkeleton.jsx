import { useContext } from "react";
import { ReportsViewContext } from "../../contexts/ReportsViewProvider";
import { defaultTexts } from "../../utils/DefaultTexts";
const ReportCardSkeleton = () => {
	const { reportsViewMode } = useContext(ReportsViewContext);
	const isListMode = reportsViewMode == defaultTexts.reportsListView ? true : false;

	return (
		<>
			<div
				className={`${isListMode ? "flex-row max-w-4xl place-self-start md:place-self-center w-full min-w-[620px]" : "flex-col"} flex animate-pulse bg-white border shadow-md border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700`}>
				<div
					className={`${isListMode ? "w-32 md:w-40 rounded-l-xl" : "rounded-t-xl h-60"} shrink-0 bg-gray-200 dark:bg-pink-800`}
				/>
				{/* Body */}
				<div className={`${isListMode ? "flex-col items-left flex-1" : "flex-col"} p-4 h-full text-left flex`}>
					<div className={`${isListMode ? "flex-1 w-full" : "w-full"}`}>
						<span className="bg-gray-200 rounded-full w-56 h-4 block"></span>
						<span className="bg-gray-200 rounded-full w-full h-3 block mt-2"></span>
						<span className="bg-gray-200 rounded-full w-full h-3 block mt-1"></span>
					</div>
					{/* List */}
					<div
						className={`${isListMode ? "*:inline-block text-left [&>span:nth-child(even)]:ml-2 mt-2" : "grid gap-x-2 grid-cols-2 mt-3"}`}>
						{isListMode || (
							<>
								<span className="bg-gray-200 rounded-full mb-2 w-32 h-3 block"></span>
								<span className="bg-gray-200 rounded-full mb-2 w-32 h-3 block"></span>
							</>
						)}
						<span className="bg-gray-200 rounded-full w-32 h-3 block"></span>
						<span className="bg-gray-200 rounded-full w-32 h-3 block"></span>
					</div>
					{/* End List */}
					{/* Tags Group */}
					{isListMode || (
						<>
							<div className="flex flex-wrap gap-2 mt-5">
								<span className="bg-gray-200 rounded-lg w-16 h-8 block"></span>
								<span className="bg-gray-200 rounded-lg w-16 h-8 block"></span>
								<span className="bg-gray-200 rounded-lg w-16 h-8 block"></span>
							</div>
						</>
					)}
				</div>
				<div
					className={`${isListMode && "flex-col gap-y-2 justify-center border-none"} py-3 px-4 flex items-center gap-x-3 border-t border-gray-200 dark:border-neutral-700`}>
					<span className={`${isListMode ? "w-28" : "w-full"} bg-gray-200 rounded-lg h-8 block`}></span>
					<span className="bg-gray-200 rounded-lg w-full h-8 block"></span>
				</div>
			</div>
		</>
	);
};

export default ReportCardSkeleton;
