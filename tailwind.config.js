module.exports = {
	mode: "jit",
	content: [
		"src/pages/**/*.{js,ts,jsx,tsx}",
		"src/components/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			spacing: {
				container: "0.2rem",
				main: "4rem 0",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
