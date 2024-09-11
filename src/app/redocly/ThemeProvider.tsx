// app/redocly/ThemeProvider.tsx

'use client';

import React, { useState } from 'react';

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
		color: '#4CAF50',
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

const CTAButton: React.FC<CTAButton & { defaultColor: string; isDarkMode: boolean }> = ({ text, isPrimary, color, defaultColor, isDarkMode }) => {
	const buttonColor = color || defaultColor;
	return isPrimary ? (
		<button
			className={`font-semibold py-3 px-6 rounded-full transition duration-300 ${isDarkMode ? 'text-white' : 'text-white'}`}
			style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
		>
			{text}
		</button>
	) : (
		<button
			className={`font-semibold py-3 px-6 rounded-full border-2 transition duration-300 ${isDarkMode ? 'bg-[#22242B] text-white' : 'bg-white'}`}
			style={{ color: isDarkMode ? 'white' : buttonColor, borderColor: buttonColor }}
		>
			{text}
		</button>
	);
};

const CTACard: React.FC<CTAData & { isDarkMode: boolean }> = ({ productName, title, description, color, buttons, gradient, isDarkMode }) => (
	<div className={`rounded-[2em] p-8 md:p-12 flex flex-col md:flex-row items-center w-full flex-shrink-0 mb-8 ${isDarkMode ? 'bg-[#22242B] text-white' : 'bg-white text-black'}`}>
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
			<p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
			<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
				{buttons.map((button, index) => (
					<CTAButton key={index} {...button} defaultColor={color} isDarkMode={isDarkMode} />
				))}
			</div>
		</div>
	</div>
);

const ThemeToggle: React.FC<{ isDarkMode: boolean; toggleTheme: () => void }> = ({ isDarkMode, toggleTheme }) => (
	<button
		onClick={toggleTheme}
		className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
			}`}
	>
		{isDarkMode ? 'Light Mode' : 'Dark Mode'}
	</button>
);

const ThemeProvider: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => setIsDarkMode(!isDarkMode);

	return (
		<div className={`transition-colors duration-200 bg-[#EDEDF2]`}>
			<ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

			<section className="py-8 px-4">

				<div className="container mx-auto">
					<div className="overflow-x-auto flex space-x-8 pb-8">
						{ctaData.map((cta, index) => (
							<CTACard key={index} {...cta} isDarkMode={isDarkMode} />
						))}
					</div>
				</div>

				
			</section>

			<div className={`RoundedBackgroundCard-sc-1xixxpd-0 blYefm mx-auto max-w-3xl mb-12 p-8 rounded-3xl ${isDarkMode ? 'bg-[#22242B] text-white' : 'bg-white text-black'}`}>
				<p className="BuildApi__Title-sc-1r921oh-1 jDpvLA text-3xl font-bold mb-4">Let's build API ubiquity, together</p>
				<a className="CustomButton__StyledButtonLink-sc-1bqbg7m-0 dBzsVE inline-block" rel="noreferrer" href="/join-the-waitlist" target="_self">
					<button className="CustomButton__StyledButton-sc-1bqbg7m-1 fjnlDJ CustomButton__Button-sc-1bqbg7m-3 ipYSyd button-variant-dark bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
						Join the waitlist
					</button>
				</a>
			</div>

		</div>
	);
};

export default ThemeProvider;