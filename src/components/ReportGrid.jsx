import clsx from "clsx";
import ReportCard from "./common/ReportCard";

const ReportGrid = ({ className = "" }) => {
	return (
		<>
			<div className={clsx(className, "grid grid-cols-3 gap-6")}>
				{[1, 2, 3, 5, 1, 2].map((el, idx) => (
					<ReportCard key={idx} />
				))}
			</div>
		</>
	);
};

export default ReportGrid;
