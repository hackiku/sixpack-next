// app/redocly/page.tsx

import React from 'react';
import Image from 'next/image';

const footerSections = {
	Products: ['Redoc', 'Revel', 'Reef', 'Realm', 'Reunite', 'Redocly CLI'],
	Explore: ['Pricing', 'Pro', 'Enterprise', 'Enterprise Plus', 'Customers', 'About Us', 'Careers'],
	Resources: ['Docs', 'Blog', 'Webinars', 'Why Redocly', 'Startup Discount', 'Docs-like-code'],
	'Tech & legal': ['Security', 'Tech Stack', 'Status', 'Terms', 'SLA', 'DPA'],
};

const RedoclyPage = () => {
	return (
		<div className="bg-[#EDEDF2]">
			{/* CTA Section */}
			<div className="container mx-auto px-4 py-16">
				<div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
					<div className="mb-8 md:mb-0 md:mr-8">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							<span className="text-[#A45CFF]">Reef:</span> Ready to Elevate your API ecosystem?
						</h2>
						<p className="text-gray-600 text-lg mb-6">
							Embrace the future of API management with Reef. Discover, optimize, and accelerate like never before.
						</p>
						<button className="bg-[#A45CFF] text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300">
							Join the waitlist
						</button>
					</div>
					<div className="w-full md:w-1/3">
						<Image src="/placeholder.jpg" alt="API Management" width={400} height={300} className="rounded-lg shadow-md" />
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="container mx-auto px-4 py-12">
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
						<a href="#" className="text-[#A45CFF] font-semibold hover:underline">Contact Us</a>
					</div>
				</div>
				<div className="border-t border-gray-300 pt-8 text-center">
					<p className="text-gray-600">© 2024 Redocly Inc. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default RedoclyPage;