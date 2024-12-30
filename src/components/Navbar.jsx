import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { routes } from "../utils/DefaultTexts";

const Navbar = () => {
	return (
		<>
			{/* ========== HEADER ========== */}
			<header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
				<nav className="relative max-w-7xl w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center gap-x-1">
						<a
							className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
							href="#">
							Brand
						</a>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild>
								<Avatar.Root className="md:hidden inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
									<Avatar.Image
										className="size-full rounded-[inherit] object-cover"
										src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
										alt="Colm Tuite"
									/>
									<Avatar.Fallback
										className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
										delayMs={600}>
										Profile Photo
									</Avatar.Fallback>
								</Avatar.Root>
							</DropdownMenu.Trigger>

							<DropdownMenu.Portal>
								<DropdownMenu.Content
									className="min-w-[16rem] z-[100000] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
									sideOffset={5}
									align="end">
									<DropdownMenu.Item>
										<Link
											className="p-2 flex justify-center items-center text-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hover:border-none"
											to={routes.home}>
											Home
										</Link>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<Link
											className="p-2 flex justify-center items-center text-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.lostReports}>
											Lost Reports
										</Link>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<Link
											className="p-2 flex justify-center items-center text-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.foundReports}>
											Found Reports
										</Link>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<Link
											className="p-2 flex justify-center items-center text-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.dashboard}>
											Dashboard
										</Link>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<Link
											className="p-2 flex justify-center items-center text-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.postReport}>
											Post Report
										</Link>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<button className="p-2 w-full flex justify-center items-center text-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
											Logout
										</button>
									</DropdownMenu.Item>

									<DropdownMenu.Arrow className="fill-white" />
								</DropdownMenu.Content>
							</DropdownMenu.Portal>
						</DropdownMenu.Root>
					</div>
					<div className="hidden overflow-hidden transition-all duration-300 basis-full grow md:block ">
						<div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
							<div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
								<div className="grow">
									<div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
										<Link
											className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.home}>
											Home
										</Link>
										<Link
											className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.lostReports}>
											Lost Reports
										</Link>
										<Link
											className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
											to={routes.foundReports}>
											Found Reports
										</Link>
									</div>
								</div>
								<div className="my-2 md:my-0 md:mx-2">
									<div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700" />
								</div>
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
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
