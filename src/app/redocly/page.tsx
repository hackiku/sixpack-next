// app/redocly/page.tsx

import React from 'react';
import Link from 'next/link';
import { redHatDisplay } from './RedHatDisplay';

const footerSections = {
	Products: ['Redoc', 'Revel', 'Reef', 'Realm', 'Reunite', 'Redocly CLI'],
	Explore: ['Pricing', 'Pro', 'Enterprise', 'Enterprise Plus', 'Customers', 'About Us', 'Careers'],
	Resources: ['Docs', 'Blog', 'Webinars', 'Why Redocly', 'Startup Discount', 'Docs-like-code'],
	'Tech & legal': ['Security', 'Tech Stack', 'Status', 'Terms', 'SLA', 'DPA'],
};

const RedoclyPage = () => {
	return (
		<div className="bg-[#EDEDF2]" style={{ fontFamily: redHatDisplay.style.fontFamily }}>

		{/* <div className={`bg-[#EDEDF2] ${redHatDisplay.variable} XXfont-sans`}> */}
			{/* Redoc Slider Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="bg-white rounded-[2em] p-8 md:p-12 flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-8 md:mb-0">
							<h2 className="text-4xl md:text-5xl font-bold mb-4">
								<span className="text-[#0066FF]">Redoc</span> is more than API docs
							</h2>
						</div>
						<div className="md:w-1/2 md:pl-8">
							<p className="text-xl mb-6">
								It's the foundation for developer engagement and API success.
							</p>
							<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
								<button className="bg-[#212121] text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
									Join the waitlist
								</button>
								<button className="bg-white text-[#212121] font-bold py-3 px-6 rounded-full border-2 border-[#212121] hover:bg-gray-100 transition duration-300">
									Discover More
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Reef CTA Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="bg-white rounded-[2em] p-8 md:p-12 flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-8 md:mb-0">
							<h2 className="text-3xl md:text-5xl font-semibold">
								<span className="text-[#A45CFF]">Reef:</span> dive into your API ecosystem
							</h2>
						</div>
						<div className="md:w-1/2 md:pl-8">
							<p className="text-xl mb-6">
								Let your developer surprise you with their ingenuity. Discover and empower all APIs in your organization.
							</p>
							<button className="bg-[#A45CFF] text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300">
								Join the waitlist
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
						{Object.entries(footerSections).map(([title, items], index) => (
							<div key={index}>
								<h3 className="font-bold text-lg mb-4">{title}</h3>
								<ul className="space-y-2">
									{items.map((item) => (
										<li key={item}>
											<a href="#" className="text-gray-600 hover:text-[#A45CFF]">{item}</a>
										</li>
									))}
								</ul>
							</div>
						))}
						<div>
							<h3 className="font-bold text-lg mb-4">Contact us</h3>
							<div className="flex space-x-4 mb-4">
								<a href="#" className="text-gray-600 hover:text-[#A45CFF]">GitHub</a>
								<a href="#" className="text-gray-600 hover:text-[#A45CFF]">LinkedIn</a>
								<a href="#" className="text-gray-600 hover:text-[#A45CFF]">Twitter</a>
								<a href="#" className="text-gray-600 hover:text-[#A45CFF]">YouTube</a>
							</div>
							<Link href="#" className="text-[#A45CFF] font-semibold hover:underline">Contact Us</Link>
						</div>
					</div>
					<div className="border-t border-gray-300 pt-8 text-center">
						<p className="text-gray-600">© 2024 Redocly Inc. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default RedoclyPage;