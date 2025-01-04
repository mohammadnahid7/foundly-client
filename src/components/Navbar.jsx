import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../context/contexts";
import { defaultTexts, routes } from "../utils/DefaultTexts";

const Navbar = () => {
	const { pathname } = useLocation();
	const { logout, user } = useContext(AuthContext);
	return (
		<>
			<header className="fixed left-0 top-0 flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
				<nav className="relative max-w-7xl w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center gap-x-1">
						<Link
							className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
							to={routes.home}>
							{defaultTexts.logo}
						</Link>
					</div>
					<div className="overflow-hidden transition-all duration-300 basis-full grow block">
						<div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
							<div className="py-2 md:py-0  flex flex-col md:flex-row items-end md:items-center gap-0.5 md:gap-1">
								<div className="grow hidden md:block">
									<div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
										<NavLink
											className={`${pathname == routes.home && "bg-gray-100 border-2 border-gray-200"} p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
											to={routes.home}>
											Home
										</NavLink>
										<NavLink
											className={`${pathname == routes.lostReports && "bg-gray-100 border-2 border-gray-200"} p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
											to={routes.allReports}>
											All Reports
										</NavLink>
									</div>
								</div>
								<div className="my-2 hidden md:block md:my-0 md:mx-2">
									<div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700" />
								</div>
								{user?.uid ? (
									<DropdownMenu.Root>
										<DropdownMenu.Trigger asChild>
											<div>
												<Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
													<Avatar.Image
														className="size-full rounded-[inherit] object-cover"
														src={user?.photoURL}
														alt="Colm Tuite"
													/>
													<Avatar.Fallback
														className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
														delayMs={600}>
														Profile Photo
													</Avatar.Fallback>
												</Avatar.Root>
											</div>
										</DropdownMenu.Trigger>

										<DropdownMenu.Portal>
											<DropdownMenu.Content
												className="min-w-[16rem] md:min-w-[16rem] z-[100000] rounded-md border border-gray-200 bg-white p-[5px] shadow-lg will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
												sideOffset={5}
												align="end">
												<DropdownMenu.Item className="">
													<div className="flex flex-col items-center py-2 border-b border-gray-200">
														<span className="text-sm font-bold">{user?.displayName}</span>
														<span className="text-sm">{user?.email}</span>
													</div>
												</DropdownMenu.Item>
												<DropdownMenu.Item className="md:hidden">
													<NavLink
														className={`${pathname == routes.home && "bg-gray-100 border-2 border-gray-200"} justify-center p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
														to={routes.home}>
														Home
													</NavLink>
												</DropdownMenu.Item>
												<DropdownMenu.Item className="md:hidden">
													<NavLink
														className={`${pathname == routes.lostReports && "bg-gray-100 border-2 border-gray-200"} justify-center p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
														to={routes.lostReports}>
														Lost Reports
													</NavLink>
												</DropdownMenu.Item>
												<DropdownMenu.Item className="md:hidden">
													<NavLink
														className={`${pathname == routes.foundReports && "bg-gray-100 border-2 border-gray-200"} justify-center p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
														to={routes.foundReports}>
														Found Reports
													</NavLink>
												</DropdownMenu.Item>
												<DropdownMenu.Item>
													<NavLink
														className={`${pathname == routes.dashboard && "bg-gray-100 border-2 border-gray-200"} justify-center p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
														to={routes.dashboard}>
														Dashboard
													</NavLink>
												</DropdownMenu.Item>
												<DropdownMenu.Item>
													<NavLink
														className={`${pathname == routes.postReport && "bg-gray-100 border-2 border-gray-200"} justify-center p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
														to={routes.postReport}>
														Post Report
													</NavLink>
												</DropdownMenu.Item>
												<DropdownMenu.Item>
													<button
														onClick={() => logout()}
														className="p-2 w-full flex justify-center items-center text-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
														Logout
													</button>
												</DropdownMenu.Item>

												<DropdownMenu.Arrow className="fill-white" />
											</DropdownMenu.Content>
										</DropdownMenu.Portal>
									</DropdownMenu.Root>
								) : (
									<div className="flex flex-wrap items-center gap-x-1.5">
										<Link
											className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.login}>
											Sign in
										</Link>
										<Link
											className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
											to={routes.register}>
											Get started
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
