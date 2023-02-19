import Image from "../assets/images/hero-img.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => {
	return (
		<section className="container mx-auto">
			{/* banner */}
			<div className="flex flex-col items-center lg:flex-row ">
				<div className="flex-1 ">
					<div
						className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]"
						data-aos="fade-down"
						data-aos-delay="400"
					>
						<div className="flex items-center justify-between text-sm lg:text-base">
							<div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">
								75% SAVE
							</div>
							<div>For the Black Friday weekend</div>
						</div>
					</div>

					<h1
						className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6"
						data-aos="fade-down"
						data-aos-delay="500"
					>
						Fastest &amp; secure platform to invest in crypto.
					</h1>
					<p
						className="max-w-[440px] leading-relaxed mb-8"
						data-aos="fade-down"
						data-aos-delay="600"
					>
						Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
						billion in transactions.
					</p>
					<button
						className="btn gap-x-6 pl-6 text-sm lg:h16 lg:text-base"
						data-aos="fade-down"
						data-aos-delay="700"
					>
						Try for free
						<IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
					</button>
				</div>
				<div className="flex-1">
					<img
						src={Image}
						alt="crypto transactions"
						data-aos="fade-up"
						data-aos-delay="600"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
