import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { PiArrowUpRightBold, PiCaretUpDownBold, PiPencilSimpleBold, PiTrashBold, PiXBold } from "react-icons/pi";
import UpdateModal from "./UpdateModal";

const TableBody = ({ items }) => {
	const [updateModalData, setUpdateModalData] = useState({ isOpen: false, itemIdx: null });
	const handleUpdateModalOpen = (a) => {
		setUpdateModalData((p) => ({ ...p, isOpen: a }));
	};
	return (
		<>
			<table className="min-w-full ekhnf hgral dark:divide-neutral-700">
				<thead>
					<tr>
						<th scope="col" className="y5qqo u4pm7">
							<input
								type="checkbox"
								className="vpbnr k1wqe qourt kikgv kjmk4 oekgx z50zr dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
							/>
						</th>
						<th scope="col" className="min-w-[250px]">
							<button
								type="button"
								className="f5qiq v7jym u4pm7 w-full flex items-center c0yql hac7f ffi2c vej1k sbnko s6nmp dark:text-neutral-500 dark:focus:bg-neutral-700">
								Item
								<PiCaretUpDownBold className="size-3" />
							</button>
						</th>
						<th scope="col" className="min-w-[120px]">
							<button
								type="button"
								className="f5qiq v7jym u4pm7 w-full flex items-center c0yql hac7f ffi2c vej1k sbnko s6nmp dark:text-neutral-500 dark:focus:bg-neutral-700">
								Category
								<PiCaretUpDownBold className="size-3" />
							</button>
						</th>
						<th scope="col" className="min-w-[180px]">
							<button
								type="button"
								className="f5qiq v7jym u4pm7 w-full flex items-center c0yql hac7f ffi2c vej1k sbnko s6nmp dark:text-neutral-500 dark:focus:bg-neutral-700">
								Location
								<PiCaretUpDownBold className="size-3" />
							</button>
						</th>
						<th scope="col" className="min-w-[100px]">
							<button
								type="button"
								className="f5qiq v7jym u4pm7 w-full flex items-center c0yql hac7f ffi2c vej1k sbnko s6nmp dark:text-neutral-500 dark:focus:bg-neutral-700">
								Date
								<PiCaretUpDownBold className="size-3" />
							</button>
						</th>
						<th scope="col" className="min-w-[100px]">
							<button
								type="button"
								className="f5qiq v7jym u4pm7 w-full flex items-center c0yql hac7f ffi2c vej1k sbnko s6nmp dark:text-neutral-500 dark:focus:bg-neutral-700">
								Type
								<PiCaretUpDownBold className="size-3" />
							</button>
						</th>
						<th scope="col" className="min-w-[100px]">
							<button
								type="button"
								className="f5qiq v7jym u4pm7 w-full flex items-center c0yql hac7f ffi2c vej1k sbnko s6nmp dark:text-neutral-500 dark:focus:bg-neutral-700">
								Status
								<PiCaretUpDownBold className="size-3" />
							</button>
						</th>
						<th scope="col" className="min-w-[60px]">
							<button
								type="button"
								className="f5qiq v7jym u4pm7 w-full flex items-center c0yql hac7f ffi2c vej1k sbnko s6nmp dark:text-neutral-500 dark:focus:bg-neutral-700">
								Status
								<PiCaretUpDownBold className="size-3" />
							</button>
						</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody className="ekhnf hgral dark:divide-neutral-700">
					{items.map((el, idx) => (
						<tr key={idx}>
							<td className="mfzsv lslrf y5qqo nfs8p">
								<input
									type="checkbox"
									className="vpbnr k1wqe qourt kikgv kjmk4 oekgx z50zr dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
								/>
							</td>
							<td className="mfzsv lslrf cqbgq yxmdd">
								<div className="w-full flex items-center clmee">
									<img className="vpbnr sc50l v3ki5" src={el.imageURL} alt="Product Image" />
									<div className="btpiv">
										<a className="hac7f ivg4u dt7pj r8d8u ffypy y9jdg sbnko qdamc ctzhm dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500">
											{el.title}
										</a>
									</div>
								</div>
							</td>
							<td className="mfzsv lslrf cqbgq yxmdd">
								<span className="z1r3e arrd8 dt7pj ps4xk v3ki5 dark:bg-neutral-700 dark:text-neutral-200">
									{el.category}
								</span>
							</td>
							<td className="mfzsv lslrf cqbgq yxmdd">
								<span className="text-sm text-gray-600">{el.location}</span>
							</td>
							<td className="mfzsv lslrf cqbgq yxmdd">
								<span className="hac7f ue964 dark:text-neutral-400">
									{new Date(el.reportedDate).toLocaleDateString("en-GB")}
								</span>
							</td>
							<td className="mfzsv lslrf cqbgq yxmdd">
								<span
									className={`inline-flex capitalize items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${el?.type == "lost" ? "bg-blue-100" : "bg-orange-100"}  text-teal-800 dark:bg-teal-800/30 dark:text-teal-500`}>
									{el.type}
								</span>
							</td>
							<td className="mfzsv lslrf cqbgq yxmdd">
								<div className="inline-flex items-center">
									<span
										className={`size-2 inline-block ${el.status == "active" ? "bg-green-600" : "bg-yellow-600"} rounded-full me-2`}></span>
									<span
										className={`text-sm ${el.status == "active" ? "text-green-600" : "text-yellow-600"} dark:text-neutral-400 capitalize`}>
										{el.status}
									</span>
								</div>
							</td>
							<td>
								<div className="flex items-center justify-center -space-x-px">
									<button
										type="button"
										className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 focus:outline-none focus:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:text-teal-500 dark:bg-teal-800/30 dark:hover:bg-teal-800/20 dark:focus:bg-teal-800/20">
										Accept
									</button>
								</div>
							</td>
							<td className="mfzsv lslrf cqbgq yxmdd">
								<div className="xgqt9 items-center -space-x-px">
									{/* <Dialog.Trigger asChild>
										</Dialog.Trigger> */}
									<button
										type="button"
										onClick={() => setUpdateModalData({ isOpen: true, itemIdx: idx })}
										className="rj4tp xgqt9 q6rsd items-center wwu1y rounded-l-md dpq4d jujtl v869m text-blue-700 k8i8d ze1zv oekgx z50zr sbnko pfxy3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
										<PiPencilSimpleBold className="size-4" />
									</button>
									<button
										type="button"
										className="rj4tp xgqt9 q6rsd items-center wwu1y dpq4d jujtl v869m text-green-700 k8i8d ze1zv oekgx z50zr sbnko pfxy3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
										<PiArrowUpRightBold className="size-4" />
									</button>

									<button
										type="button"
										className="rj4tp xgqt9 q6rsd items-center wwu1y rounded-r-md dpq4d jujtl v869m text-red-700 k8i8d ze1zv oekgx z50zr sbnko pfxy3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
										<PiTrashBold className="size-4" />
									</button>
									{/* End Download Dropdown */}
								</div>
							</td>
						</tr>
					))}
				</tbody>
				<Dialog.Root open={updateModalData?.isOpen} onOpenChange={handleUpdateModalOpen}>
					<Dialog.Portal>
						<Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
						<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
							<Dialog.Title className="hidden" />
							<Dialog.Description className="hidden" />
							<Dialog.Close className="hidden" />
							<UpdateModal item={items[updateModalData?.itemIdx]} setUpdateModalData={setUpdateModalData} />
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</table>
		</>
	);
};

export default TableBody;
