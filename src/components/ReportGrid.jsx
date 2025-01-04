import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { ReportsViewContext } from "../contexts/ReportsViewProvider";
import useAxios from "../hooks/useAxios";
import { defaultTexts } from "../utils/DefaultTexts";
import ReportCard from "./common/ReportCard";
import ReportCardSkeleton from "./common/ReportCardSkeleton";

const ReportGrid = ({ className = "", defaultViewMode }) => {
	const [isDocumentLoading, setIsDocumentLoading] = useState(true);
	const { reportsViewMode } = useContext(ReportsViewContext);
	const isListMode = reportsViewMode == defaultTexts.reportsListView ? true : false;

	const [reports, setReports] = useState([]);
	const axios = useAxios();

	useEffect(() => {
		axios.get("/reports").then((res) => {
			setIsDocumentLoading(false);
			setReports(res.data);
		});
	}, [axios]);
	// useEffect(() => {
	// 	const timer = setTimeout(() => setDocumentLoad(true), 2000);
	// 	return () => clearTimeout(timer);
	// });

	return (
		<>
			<div
				className={clsx(
					className,
					`grid grid-cols-1 ${isListMode ? "overflow-x-scroll md:overflow-visible" : "md:grid-cols-2 lg:grid-cols-3 "} gap-3 md:gap-6`
				)}>
				{isDocumentLoading
					? [1, 2, 3].map((el, idx) => <ReportCardSkeleton key={idx} />)
					: reports.map((el, idx) => <ReportCard el={el} key={idx} />)}
			</div>
		</>
	);
};

export default ReportGrid;
