import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react/cjs/react.production.min";

export const Theme = () => {
	const { theme, setTheme } = useTheme();

	// レンダー後かを判定
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	return (
		<div className="py-16">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
			  relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={`${enabled ? "translate-x-9" : "translate-x-0"}
				pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
				/>
			</Switch>
		</div>

		// <button
		// 	aria-label="DarkModeToggle"
		// 	type="button"
		// 	className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 md:relative md:left-0"
		// 	onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		// >
		// 	{mounted && (
		// 		<>
		// 			{theme === "dark" ? (
		// 				<Moon height={"25"} width={"25"} />
		// 			) : (
		// 				<Sun height={"25"} width={"25"} />
		// 			)}
		// 		</>
		// 	)}
		// </button>
	);
};
