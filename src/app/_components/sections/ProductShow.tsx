// components/ProductShow.tsx

import React from 'react';
import Image from 'next/image';

const IconPlaceholder = () => (
	<div className="w-6 h-6 bg-black rounded-full mr-2" />
);

const PolaroidFrame = ({ children, caption }: { children: React.ReactNode; caption: string }) => (
	<div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
		{children}
		<p className="text-center mt-4 font-bold">{caption}</p>
	</div>
);

const ProductSection = ({
	imageSrc,
	title,
	description,
	features,
	isReversed
}: {
	imageSrc: string;
	title: string;
	description: string;
	features: string[];
	isReversed: boolean
}) => {
	const content = (
		<>
			<div className={`w-full md:w-1/2 ${isReversed ? 'md:order-2' : ''}`}>
				<PolaroidFrame caption={title}>
					<div className="bg-gray-300 w-full h-64 flex items-center justify-center">
						{/* Replace with actual image when available */}
						[Product Image Placeholder]
					</div>
				</PolaroidFrame>
			</div>
			<div className={`w-full md:w-1/2 mt-8 md:mt-0 ${isReversed ? 'md:order-1' : ''}`}>
				<h2 className="text-4xl font-bold mb-4">{title}</h2>
				<p className="text-xl mb-6">{description}</p>
				<ul className="space-y-4">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center">
							<IconPlaceholder />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);

	return (
		<section className={`flex flex-col md:flex-row items-center mb-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
			{content}
		</section>
	);
};

const ProductShow: React.FC = () => {
	return (
		<div className="container mx-auto px-4">
			<ProductSection
				imageSrc="/path-to-device-image.jpg"
				title="Device"
				description="Our cutting-edge hardware brings flight data to your fingertips."
				features={[
					"6-axis motion sensing",
					"GPS tracking",
					"Long-lasting battery life"
				]}
				isReversed={false}
			/>
			<ProductSection
				imageSrc="/path-to-app-image.jpg"
				title="App"
				description="Seamlessly connect to your device and visualize your flight data."
				features={[
					"Real-time data streaming",
					"Flight logging and analysis",
					"Cross-platform compatibility"
				]}
				isReversed={true}
			/>
		</div>
	);
};

export default ProductShow;