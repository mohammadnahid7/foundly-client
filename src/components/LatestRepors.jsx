import ReportGrid from "./ReportGrid";

const LatestRepors = () => {
	return (
		<>
			<section className="relative overflow-hidden border-t border-b border-gray-100 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
					<div className="text-center">
						<h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
							Recently Reported
						</h1>
						<p className="mt-3 max-w-3xl mx-auto text-gray-600 dark:text-neutral-400">
							Browse the latest lost and found items. Someone might be looking for your help or have found what
							you’ve lost!
						</p>
						<ReportGrid className="mt-16" />
					</div>
				</div>
			</section>
		</>
	);
};

export default LatestRepors;
