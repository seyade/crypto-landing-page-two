/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				lg: "0",
			},
		},
		fontFamily: {
			primary: "Rubik",
		},
		extend: {
			colors: {
				darkblue: {
					DEFAULT: "#0d0d2b",
					secondary: "#252540",
				},
				blue: {
					DEFAULT: "#3671e9",
					hover: "#2766e6",
				},
				gray: {
					DEFAULT: "#e0e0e0",
				},
				violet: "#2b076e",
				white: "#fff",
			},
			boxShadow: {
				primary: "0px 20px 200px rgba(57, 23, 119, 0.0.5)",
			},
			backgroundImage: {
				newsletter: "url('/src/assets/images/newsletter-bg.png')",
				newsletterBox: "url('/src/assets/images/newsletter-box.png')",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
		},
	},
	plugins: [],
};
