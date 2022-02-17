module.exports = {
	mode: "jit",
	content: [
		"src/pages/**/*.{js,ts,jsx,tsx}",
		"src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			padding: {
				main: "4rem 0",
			},
		},
	},
	plugins: [],
};
