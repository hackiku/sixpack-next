// app/redocly/page.tsx

import React from 'react';
import { redHatDisplay } from './RedHatDisplay';

interface CTAButton {
	text: string;
	isPrimary: boolean;
	color?: string;
}

interface CTAData {
	productName: string;
	title: string;
	description: string;
	color: string;
	buttons: CTAButton[];
	gradient?: boolean;
}

const ctaData: CTAData[] = [
	{
		productName: 'Reunite',
		title: 'Collaborative editor suite',
		description: "Streamline your documentation process with our powerful collaborative editing tools.",
		color: '#4CAF50', // Green color, you can adjust as needed
		buttons: [
			{ text: 'Try Reunite', isPrimary: true },
			{ text: 'Learn more', isPrimary: false },
		],
	},
	{
		productName: 'Revel',
		title: 'External developer showcase',
		description: 'Create beautiful, interactive API documentation that developers love.',
		color: '#FF6B00',
		buttons: [
			{ text: 'Try Revel now', isPrimary: true },
			{ text: 'Learn more', isPrimary: false },
		],
	},
	{
		productName: 'Redoc',
		title: 'API reference and mock server',
		description: "The foundation for developer engagement and API success.",
		color: '#0066FF',
		buttons: [
			{ text: 'Explore Redoc', isPrimary: true },
			{ text: 'View Demo', isPrimary: false },
		],
	},
	{
		productName: 'Reef',
		title: 'Internal service catalog',
		description: 'Discover and empower all APIs in your organization with our comprehensive internal catalog.',
		color: '#A45CFF',
		buttons: [
			{ text: 'Learn about Reef', isPrimary: true },
			{ text: 'Request Demo', isPrimary: false },
		],
	},
	{
		productName: 'Realm',
		title: 'Combo of Redoc, Revel, and Reef',
		description: 'Unlock the full potential of your APIs with our comprehensive ecosystem.',
		color: 'rgb(22, 119, 255)',
		buttons: [
			{ text: 'Explore Realm', isPrimary: true },
			{ text: 'Get Pricing', isPrimary: false },
		],
		gradient: true,
	},
];

const CTAButton: React.FC<CTAButton & { defaultColor: string }> = ({ text, isPrimary, color, defaultColor }) => {
	const buttonColor = color || defaultColor;
	return isPrimary ? (
		<button
			className="font-semibold py-3 px-6 rounded-full text-white transition duration-300"
			style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
		>
			{text}
		</button>
	) : (
		<button
			className="bg-white font-semibold py-3 px-6 rounded-full border-2 transition duration-300"
			style={{ color: buttonColor, borderColor: buttonColor }}
		>
			{text}
		</button>
	);
};

const CTACard: React.FC<CTAData> = ({ productName, title, description, color, buttons, gradient }) => (
	<div className="bg-white rounded-[2em] p-8 md:p-12 flex flex-col md:flex-row items-center w-full flex-shrink-0 mb-8">
		<div className="md:w-1/2 mb-8 md:mb-0">
			<h2 className="text-4xl md:text-5xl font-bold mb-4">
				<span
					style={gradient ? {
						background: 'linear-gradient(90deg, rgb(22, 119, 255) 0%, rgb(8, 199, 224) 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
						position: 'relative',
					} : { color }}
				>
					{productName}
				</span> {title}
			</h2>
		</div>
		<div className="md:w-1/2 md:pl-8">
			<p className="text-xl mb-6">{description}</p>
			<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
				{buttons.map((button, index) => (
					<CTAButton key={index} {...button} defaultColor={color} />
				))}
			</div>
		</div>
	</div>
);

const RedoclyPage: React.FC = () => {
	return (
		<div className="bg-[#EDEDF2]" style={{ fontFamily: redHatDisplay.style.fontFamily }}>
			<section className="relative overflow-hidden -mt-40 -mb-16">
				<div className="container mx-auto px-5 relative" style={{ zIndex: 1 }}>
					<img
						src="redocly/circle.png"
						alt="Orbiter"
						className="w-full max-w-xl mx-auto"
						style={{ zIndex: -1 }}
					/>
				</div>
			</section>

			<section className="py-8">
				<div className="container mx-auto px-4">
					<div className="overflow-x-auto flex space-x-8 pb-8">
						{ctaData.map((cta, index) => (
							<CTACard key={index} {...cta} />
						))}
					</div>
				</div>
			</section>

			<section className="mt-16">
				<img src="redocly/footer.png" alt="" className="w-full" />
			</section>
		</div>
	);
};

export default RedoclyPage;