// app/redocly/ThemeProvider.tsx

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ctaData, CTAData, CTAButton as CTAButtonType } from './ctaData';

const CTAButton: React.FC<CTAButtonType & { defaultColor: string; isDarkMode: boolean }> = ({ text, isPrimary, color, defaultColor, isDarkMode }) => {
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
	<div className={`rounded-[2em] p-8 md:p-12 flex flex-col md:flex-row items-center w-full flex-shrink-0 ${isDarkMode ? 'bg-[#22242B] text-white' : 'bg-white text-black'}`}>
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
		{isDarkMode ? 'Light Cards' : 'Dark Cards'}
	</button>
);

const ThemeProvider: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);

	const toggleTheme = () => setIsDarkMode(!isDarkMode);

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setStartX(e.clientX);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		const diff = startX - e.clientX;
		setScrollPosition(prev => prev + diff);
		setStartX(e.clientX);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		const slider = sliderRef.current;
		if (slider) {
			const cardWidth = slider.clientWidth;
			const totalWidth = cardWidth * ctaData.length;
			let newPosition = scrollPosition % totalWidth;
			if (newPosition < 0) newPosition += totalWidth;
			slider.style.transform = `translateX(-${newPosition}px)`;
		}
	}, [scrollPosition]);

	const renderCards = () => {
		const cards = [];
		for (let i = -1; i <= ctaData.length; i++) {
			const index = i < 0 ? ctaData.length + i : i % ctaData.length;
			cards.push(
				<div key={i} className="w-4/5 flex-shrink-0 mx-8 select-none">
					<CTACard {...ctaData[index]} isDarkMode={isDarkMode} />
				</div>
			);
		}
		return cards;
	};

	return (
		<div className="transition-colors duration-200 bg-[#EDEDF2]">
			<ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

			<section className="py-8 px-4 overflow-hidden ">
				<div
					ref={sliderRef}
					className="flex transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing"
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}
				>
					{renderCards()}
				</div>
			</section>

			<div className={`RoundedBackgroundCard-sc-1xixxpd-0 blYefm mx-auto max-w-3xl mb-12 p-8 rounded-3xl ${isDarkMode ? 'bg-[#22242B] text-white' : 'bg-white text-black'}`}>
				<p className="BuildApi__Title-sc-1r921oh-1 jDpvLA text-3xl font-bold mb-4">Let's design for API ubiquity</p>
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