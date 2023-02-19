import React from "react";
import {
	IoLogoYoutube,
	IoLogoInstagram,
	IoLogoTwitter,
	IoLogoLinkedin,
} from "react-icons/io";

import Logo from "../assets/images/logo.svg";
import VisaLogo from "../assets/images/visa.png";
import MastercardLogo from "../assets/images/mastercard.png";
import BitcoinBlackLogo from "../assets/images/bitcoin-black.png";

const Footer = () => {
	return (
		<footer className="lg:pt-24 pt-0" data-aos="fade-up" data-aos-offset="400">
			<div className="container mx-auto lg:mb-24">
				<div className="flex flex-col gap-12 lg:flex-row">
					<div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
						<img src={Logo} alt="Logo" />
					</div>
					<div className="flex flex-1 flex-col gap-16 lg:flex-row">
						<div className="text-center w-full lg:text-left">
							<div className="text-xl font-medium mb-6">Quick links</div>
							<ul className="space-y-4 text-gray">
								<li>
									<a className="hover:text-blue transition" href="#">
										Home
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										Product
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										About
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										Features
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>

						<div className="text-center w-full lg:text-left">
							<div className="text-xl font-medium mb-6">Resources links</div>
							<ul className="space-y-4 text-gray">
								<li>
									<a className="hover:text-blue transition" href="#">
										Download whitepaper
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										Smart contract
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										Blockchain explorer
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										Crypto API
									</a>
								</li>
								<li>
									<a className="hover:text-blue transition" href="#">
										Rewards
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col flex-1">
						<div className="lg:ml-[80px]">
							<h3 className="h3 font-medium text-center mb-10 lg:text-left">
								We accept the following payment systems
							</h3>
							<div className="flex justify-center items-center gap-6">
								<img src={VisaLogo} alt="visa" />
								<img src={MastercardLogo} alt="mastercard" />
								<img src={BitcoinBlackLogo} alt="bitcoin" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-12 ">
				<div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
					<div>&copy; 2023 CRAPPO.</div>

					<div className="flex text-2xl gap-x-8">
						<a className="hover:text-blue transition" href="#">
							<IoLogoYoutube />
						</a>
						<a className="hover:text-blue transition" href="#">
							<IoLogoInstagram />
						</a>
						<a className="hover:text-blue transition" href="#">
							<IoLogoTwitter />
						</a>
						<a className="hover:text-blue transition" href="#">
							<IoLogoLinkedin />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
