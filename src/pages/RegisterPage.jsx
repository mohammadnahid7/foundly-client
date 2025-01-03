import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import AuthContext from "../context/contexts";
import { routes } from "../utils/DefaultTexts";

const RegisterPage = () => {
	const { createUser, user, googleSignIn } = useContext(AuthContext);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		console.log(...form.values());
		createUser(form.get("email"), form.get("password"), {
			displayName: form.get("full-name"),
			photoURL: form.get("image-url"),
		});
	};
	console.log(user);
	return (
		<>
			<div className="grow px-5">
				<div className="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
					{/* Title */}
					<div>
						<h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
							Set up your personal account
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
							onClick={() => googleSignIn()}
							className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
							<FcGoogle className="size-5" />
							Sign up with Google
						</button>
					</div>
					{/* End Button Group */}
					<div className="flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
						Or
					</div>
					<form onSubmit={handleFormSubmit}>
						<div className="space-y-5">
							<div>
								<label
									htmlFor="full-name"
									className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
									Full name
								</label>
								<input
									type="text"
									id="full-name"
									name="full-name"
									className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="John Doe"
								/>
							</div>
							<div>
								<label
									htmlFor="image-url"
									className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
									Image URL
								</label>
								<input
									type="url"
									id="image-url"
									name="image-url"
									className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
									placeholder="e.g. Preline"
								/>
							</div>
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
							<div data-hs-toggle-password-group="" className="space-y-3">
								{/* Input */}
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
										Password
									</label>
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
											data-hs-toggle-password='{
                                "target": ["#hs-pro-dappnp", "#hs-pro-dapprnp"]
                              }'
											className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
											<svg
												className="shrink-0 size-4"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
												<path
													className="hs-password-active:hidden"
													d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
												/>
												<path
													className="hs-password-active:hidden"
													d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
												/>
												<line className="hs-password-active:hidden" x1={2} x2={22} y1={2} y2={22} />
												<path
													className="hidden hs-password-active:block"
													d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
												/>
												<circle className="hidden hs-password-active:block" cx={12} cy={12} r={3} />
											</svg>
										</button>
									</div>
								</div>
							</div>

							<button
								type="submit"
								className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600">
								Sign up
							</button>
						</div>
					</form>
					<p className="text-sm text-gray-500 dark:text-neutral-500">
						New to Foundly?
						<Link
							to={routes.login}
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

export default RegisterPage;
