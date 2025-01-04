import { PiXBold } from "react-icons/pi";
import { formKeyNames } from "../../utils/DefaultTexts";

const UpdateModal = ({ item, setUpdateModalData }) => {
	const handleFormData = (e) => {
		e.preventDefault();
		// imageURL title description category location reportedDate
		const form = new FormData(e.target);
		const reportData = {
			[formKeyNames.imageURL]: form.get(formKeyNames.imageURL),
			[formKeyNames.title]: form.get(formKeyNames.title),
			[formKeyNames.description]: form.get(formKeyNames.description),
			[formKeyNames.category]: form.get(formKeyNames.category),
			[formKeyNames.location]: form.get(formKeyNames.location),
			[formKeyNames.reportedDate]: form.get(formKeyNames.reportedDate),
		};
		console.log(reportData);
	};

	return (
		<>
			<form
				onSubmit={handleFormData}
				className="w-full elq3q flex dr3q9 v869m it6u8 o996l shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800">
				<div className="v7jym cqbgq flex encm3 items-center x815m dark:border-neutral-700">
					<h3 id="hs-pro-deum-label" className="ivg4u b7vor dark:text-neutral-200">
						Edit Report
					</h3>
					<button
						onClick={() => setUpdateModalData((p) => ({ ...p, isOpen: false }))}
						type="button"
						className="rj4tp xgqt9 q6rsd items-center wwu1y a3ufl dpq4d rg6vy qqcm6 b7vor rmq2c oekgx z50zr sbnko rahzd dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600">
						<span className="yps74">Close</span>
						<PiXBold className="size-4" />
					</button>
				</div>

				<div className="w56at ixhii el1lk my2de peqgl dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
					<div className="fo082 ia4l2">
						<div className="cwrq4 ktjle bgnon dkjki lfptd">
							<div className="u2bzw">
								<label htmlFor={formKeyNames.imageURL} className="zt4us dxkem hac7f oxyct dark:text-neutral-500">
									ImageURL
								</label>
							</div>
							<div className="pzbob">
								<input
									id={formKeyNames.imageURL}
									name={formKeyNames.imageURL}
									type="text"
									className="fuiju tm5do block w-full a11ya xroga hac7f mryrt yjgee pnxyx oekgx z50zr dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="James Davidson"
									defaultValue={item[formKeyNames.imageURL]}
								/>
							</div>
						</div>

						<div className="cwrq4 ktjle bgnon dkjki lfptd">
							<div className="u2bzw">
								<label htmlFor={formKeyNames.title} className="zt4us dxkem hac7f oxyct dark:text-neutral-500">
									Title
								</label>
							</div>

							<div className="pzbob">
								<input
									id={formKeyNames.title}
									name={formKeyNames.title}
									type="text"
									className="fuiju tm5do block w-full a11ya xroga hac7f mryrt yjgee pnxyx oekgx z50zr dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="James Davidson"
									defaultValue={item[formKeyNames.title]}
								/>
							</div>
						</div>
						<div className="cwrq4 ktjle bgnon dkjki lfptd">
							<div className="u2bzw">
								<label
									htmlFor={formKeyNames.description}
									className="zt4us dxkem hac7f oxyct dark:text-neutral-500">
									Description
								</label>
							</div>

							<div className="pzbob">
								<textarea
									id={formKeyNames.description}
									name={formKeyNames.description}
									type="text"
									className="fuiju tm5do block w-full a11ya xroga hac7f mryrt yjgee pnxyx oekgx z50zr dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="James Davidson"
									defaultValue={item[formKeyNames.description]}
								/>
							</div>
						</div>
						<div className="cwrq4 ktjle bgnon dkjki lfptd">
							<div className="u2bzw">
								<label htmlFor={formKeyNames.category} className="zt4us dxkem hac7f oxyct dark:text-neutral-500">
									Category
								</label>
							</div>

							<div className="pzbob">
								<input
									id={formKeyNames.category}
									name={formKeyNames.category}
									type="text"
									className="fuiju tm5do block w-full a11ya xroga hac7f mryrt yjgee pnxyx oekgx z50zr dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="James Davidson"
									defaultValue={item[formKeyNames.category]}
								/>
							</div>
						</div>
						<div className="cwrq4 ktjle bgnon dkjki lfptd">
							<div className="u2bzw">
								<label htmlFor={formKeyNames.location} className="zt4us dxkem hac7f oxyct dark:text-neutral-500">
									Location
								</label>
							</div>

							<div className="pzbob">
								<input
									id={formKeyNames.location}
									name={formKeyNames.location}
									type="text"
									className="fuiju tm5do block w-full a11ya xroga hac7f mryrt yjgee pnxyx oekgx z50zr dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="James Davidson"
									defaultValue={item[formKeyNames.location]}
								/>
							</div>
						</div>
						<div className="cwrq4 ktjle bgnon dkjki lfptd">
							<div className="u2bzw">
								<label
									htmlFor={formKeyNames.reportedDate}
									className="zt4us dxkem hac7f oxyct dark:text-neutral-500">
									Reported Date
								</label>
							</div>

							<div className="pzbob">
								<input
									id={formKeyNames.reportedDate}
									name={formKeyNames.reportedDate}
									type="text"
									className="fuiju tm5do block w-full a11ya xroga hac7f mryrt yjgee pnxyx oekgx z50zr dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="James Davidson"
									defaultValue={item[formKeyNames.reportedDate]}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="fo082 flex qsj3b wwu1y">
					<div className="mhlpb flex qsj3b items-center ciztt">
						<button
							onClick={() => setUpdateModalData((p) => ({ ...p, isOpen: false }))}
							type="button"
							className="fuiju tm5do i419g xgqt9 q6rsd items-center u4pm7 v869m dpq4d a11ya b7vor hac7f ivg4u xroga k8i8d a2xg7 e1tdc oekgx z50zr dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
							Cancel
						</button>
						<button
							type="submit"
							className="fuiju tm5do i419g xgqt9 q6rsd items-center wwu1y u4pm7 sh5ol dpq4d dbqf7 l6gz8 hac7f ivg4u xroga k8i8d a2xg7 a9sj1 oekgx z50zr sbnko g5wj4 v3p3o dark:focus:ring-blue-500"
							data-hs-overlay="#hs-pro-deum"
							aria-expanded="true">
							Save changes
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default UpdateModal;
