module.exports = {
	mode: "jit",
	content: ["src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				container: "0.2rem",
				main: "4rem 0",
				footer: "2rem 0",
			},
		},
	},
	plugins: [],
};
