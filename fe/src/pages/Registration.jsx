import React from "react";

function Registration() {
	return (
		<div>
			<div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
				<div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
					Create a new account
				</div>
				<span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
					Already have an account ?
					<a
						href="#"
						target="_blank"
						class="text-sm text-blue-500 underline hover:text-blue-700"
					>
						Sign in
					</a>
				</span>
				<div class="p-6 mt-8">
					<form action="#">
						<div class="flex gap-4 mb-2">
							<div class=" relative ">
								<input
									type="text"
									id="create-account-first-name"
									class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
									name="nome"
									placeholder="Nome"
								/>
							</div>
							<div class=" relative ">
								<input
									type="text"
									id="create-account-last-name"
									class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
									name="cognome"
									placeholder="Cognome"
								/>
							</div>
						</div>
						<div class="flex flex-col mb-2">
							<div class=" relative ">
								<input
									type="email"
									id="create-account-email"
									class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
									name="email"
									placeholder="Email"
								/>
							</div>
						</div>
						<div class="flex flex-col mb-2">
							<div class=" relative ">
								<input
									type="password"
									id="create-account-pseudo"
									class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
									name="password"
									placeholder="Password"
								/>
							</div>
						</div>
						<div class="flex w-full my-4">
							<button
								type="submit"
								class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Registration;