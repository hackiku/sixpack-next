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
}

const ctaData: CTAData[] = [
	{
		productName: 'Redoc',
		title: 'is more than API docs',
		description: "It's the foundation for developer engagement and API success.",
		color: '#0066FF',
		buttons: [
			{ text: 'Join the waitlist', isPrimary: true },
			{ text: 'Discover More', isPrimary: false },
		],
	},
	{
		productName: 'Reef',
		title: 'dive into your API ecosystem',
		description: 'Let your developers surprise you with their ingenuity. Discover and empower all APIs in your organization.',
		color: '#A45CFF',
		buttons: [
			{ text: 'Join the waitlist', isPrimary: true, color: '#A45CFF' },
		],
	},
	{
		productName: 'Revel',
		title: 'in your API documentation',
		description: 'Create beautiful, interactive API documentation that developers love.',
		color: '#FF6B00',
		buttons: [
			{ text: 'Try Revel now', isPrimary: true, color: '#FF6B00' },
			{ text: 'Learn more', isPrimary: false },
		],
	},
];

const CTAButton: React.FC<CTAButton & { defaultColor: string }> = ({ text, isPrimary, color, defaultColor }) => {
	const buttonColor = color || defaultColor;
	return isPrimary ? (
		<button
			className="font-bold py-3 px-6 rounded-full text-white transition duration-300"
			style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
		>
			{text}
		</button>
	) : (
		<button
			className="bg-white font-bold py-3 px-6 rounded-full border-2 transition duration-300"
			style={{ color: buttonColor, borderColor: buttonColor }}
		>
			{text}
		</button>
	);
};

const CTACard: React.FC<CTAData> = ({ productName, title, description, color, buttons }) => (
	<div className="bg-white rounded-[2em] p-8 md:p-12 flex flex-col md:flex-row items-center w-full flex-shrink-0 mb-8">
		<div className="md:w-1/2 mb-8 md:mb-0">
			<h2 className="text-4xl md:text-5xl font-bold mb-4">
				<span style={{ color }}>{productName}</span> {title}
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

			<section className="relative overflow-hidden -mt-24 -mb-8">
				<div className="container mx-auto px-5">
					<img
						src="redocly/circle.png"
						alt="Orbiter"
						className="w-full max-w-xl mx-auto"
					/>
				</div>
			</section>

			<section className="py-8">
				<div className="container mx-auto px-4">
					<div className="overflow-x-auto flex space-x-8 pb-8" style={{ cursor: 'pointer' }}>
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