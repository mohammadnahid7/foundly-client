import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { PiCaretRightBold, PiEyeBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/contexts";
import { routes } from "../utils/DefaultTexts";

const LoginPage = () => {
	const { googleSignIn, login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		login(...form.values());
	};
	return (
		<>
			<div className="grow px-5">
				<div className="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
					{/* Title */}
					<div>
						<h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
							Log in to your personal account
						</h1>
						<p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
							Browse the latest lost and found items.
						</p>
					</div>
					{/* End Title */}
					{/* Button Group */}
					<div className="flex flex-col sm:flex-row gap-2">
						<button
							type="button"
							onClick={async () => googleSignIn(navigate)}
							className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
							<FcGoogle className="size-5" />
							Sign in with Google
						</button>
					</div>
					{/* End Button Group */}
					<div className="flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
						Or
					</div>
					<form onSubmit={handleFormSubmit}>
						<div className="space-y-5">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="you@email.com"
								/>
							</div>
							<div>
								<div className="flex justify-between items-center mb-2">
									<label htmlFor="password" className="block text-sm font-medium text-gray-800 dark:text-white">
										Password
									</label>
									<a className="inline-flex items-center gbe75 text-xs text-gray-600 hover:text-gray-700 decoration-2 hover:underline focus:outline-none focus:underline dark:text-neutral-500 dark:hover:text-neutral-600">
										I forgot my password
									</a>
								</div>
								<div className="relative">
									<input
										id="password"
										name="password"
										type="password"
										className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
										placeholder="********"
									/>
									<button
										type="button"
										className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
										<PiEyeBold />
									</button>
								</div>
							</div>
							<button
								type="submit"
								className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600">
								Sign in
							</button>
						</div>
					</form>
					<p className="text-sm text-gray-500 dark:text-neutral-500">
						New to Foundly?
						<Link
							to={routes.register}
							className="inline-flex ml-2 items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-500">
							Sign up
							<PiCaretRightBold className="size-4" />
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
