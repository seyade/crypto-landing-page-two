import { useEffect, useState } from "react";
import Aos from "aos";

import Header from "./components/Header";
import Hero from "./components/Hero";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/Calculate";
import Trade from "./components/Trade";
import Features from "./components/Features";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

import "aos/dist/aos.css";

function App() {
	const [isNavMobile, setIsNavMobile] = useState(false);

	useEffect(() => {
		Aos.init({
			duration: 2500,
			delay: 400,
		});
	}, []);

	return (
		<div className="overflow-hidden">
			<Header setIsNavMobile={setIsNavMobile} />
			<Hero />
			<div
				className={`${
					isNavMobile ? "right-0" : "-right-full"
				} fixed z-10 top-0 h-full transition-all duration-200`}
			>
				<NavMobile setIsNavMobile={setIsNavMobile} />
			</div>
			<Stats />
			<Why />
			<Calculate />
			<Trade />
			<Features />
			<NewsLetter />
			<Footer />
		</div>
	);
}

export default App;
