module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			spacing: {
				container: "0.2rem",
				main: "4rem 0",
			},
		},
	},
	plugins: [],
};
