import React from "react";

import Image1 from "../assets/images/feature-1-img.png";

const FeaturesSection1 = () => {
	return (
		<section className="pb-[30px] lg:pb-[120px] pt-0">
			<div className="flex flex-col lg:flex-row">
				<div
					className="max-w-[454px] mb-6 lg:mt-10"
					data-aos="fade-right"
					data-aos-offset="400"
				>
					<h3 className="h3 mb-6">Invest Smartly</h3>
					<p className="text-gray mb-8">
						Get full analytics about the behaviour of buyers and sellers to help
						you make informed decision.
					</p>
					<button className="btn px-8">Learn more</button>
				</div>

				<div
					className="flex flex-1 justify-end"
					data-aos="fade-left"
					data-aos-offset="400"
				>
					<img src={Image1} alt="feature one" />
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection1;
