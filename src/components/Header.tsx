import React from "react";
import { CgMenuRight } from "react-icons/cg";
import Nav from "../components/Nav";
import AccountButton from "../components/AccountButton";

import Logo from "../assets/images/logo.svg";

export type HeaderProps = {
	setIsNavMobile: (isMobile: boolean) => void;
};

const Header = ({ setIsNavMobile }: HeaderProps) => {
	return (
		<header
			className="py-[30px] lg:pt-[60px]"
			data-aos="fade-down"
			data-aos-delay="900"
			data-aos-duration="2000"
		>
			<div className="container mx-auto flex items-center justify-between">
				<a href="#">
					<img src={Logo} alt="Logo" />
				</a>

				<div className="hidden lg:flex gap-x-[55px]">
					<Nav />
					<AccountButton />
				</div>

				<div
					onClick={() => setIsNavMobile(true)}
					className="lg:hidden cursor-pointer"
				>
					<CgMenuRight className="text-2xl" />
				</div>
			</div>
		</header>
	);
};

export default Header;
