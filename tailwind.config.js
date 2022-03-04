module.exports = {
	mode: "jit",
	content: [
		"src/pages/**/*.{js,ts,jsx,tsx}",
		"src/Components/**/*.{js,ts,jsx,tsx}",
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
