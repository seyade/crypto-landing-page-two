import React from "react";

import { navData } from "../data";

const Nav = () => {
	return (
		<nav className="flex items-center">
			<ul className="flex gap-x-8">
				{navData.map((item, index) => (
					<li
						className="border-b-2 border-transparent hover:border-blue transition-all duration-300"
						key={item.name}
					>
						<a href={item.href}>{item.name}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
