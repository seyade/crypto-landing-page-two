import React from "react";
import { CgClose } from "react-icons/cg";
import { navData } from "../data";

type NavMobileProps = {
	setIsNavMobile: (isMobile: boolean) => void;
};

const NavMobile = ({ setIsNavMobile }: NavMobileProps) => {
	return (
		<nav className="lg:hidden bg-violet h-full bottom-0 w-80 flex justify-center items-center">
			<div
				onClick={() => setIsNavMobile(false)}
				className="absolute top-2 left-2 cursor-pointer"
			>
				<CgClose className="text-3xl" />
			</div>

			<ul className="text-xl flex flex-col gap-y-8">
				{navData.map((item, index) => {
					return (
						<li key={item.name}>
							<a href={item.href}>{item.name}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavMobile;
