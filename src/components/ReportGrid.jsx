import clsx from "clsx";
import { useEffect, useState } from "react";
import ReportCard from "./common/ReportCard";
import ReportCardSkeleton from "./common/ReportCardSkeleton";

const ReportGrid = ({ className = "" }) => {
	const [documentLoad, setDocumentLoad] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => setDocumentLoad(true), 5000);
		return () => clearTimeout(timer);
	});

	return (
		<>
			<div className={clsx(className, "grid grid-cols-1 md:grid-cols-3 gap-6")}>
				{documentLoad
					? [1, 2, 3].map((el, idx) => <ReportCard key={idx} />)
					: [1, 2, 3].map((el, idx) => <ReportCardSkeleton key={idx} />)}
			</div>
		</>
	);
};

export default ReportGrid;
