import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { ReportsViewContext } from "../contexts/ReportsViewProvider";
import { defaultTexts } from "../utils/DefaultTexts";
import ReportCard from "./common/ReportCard";
import ReportCardSkeleton from "./common/ReportCardSkeleton";

const ReportGrid = ({ className = "" }) => {
	const [documentLoad, setDocumentLoad] = useState(false);
	const { reportsViewMode } = useContext(ReportsViewContext);
	const isListMode = reportsViewMode == defaultTexts.reportsListView ? true : false;

	useEffect(() => {
		const timer = setTimeout(() => setDocumentLoad(true), 55000);
		return () => clearTimeout(timer);
	});

	return (
		<>
			<div
				className={clsx(
					className,
					`grid grid-cols-1 ${isListMode ? "overflow-x-scroll md:overflow-visible" : "md:grid-cols-2 lg:grid-cols-3 "} gap-3 md:gap-6`
				)}>
				{documentLoad
					? [1, 2, 3].map((el, idx) => <ReportCard key={idx} />)
					: [1, 2, 3].map((el, idx) => <ReportCardSkeleton key={idx} />)}
			</div>
		</>
	);
};

export default ReportGrid;
