// @/app/_components/sections/HeroSection.tsx

"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PlayIcon: React.FC = () => (
	<div className="w-12 h-12 sm:w-16 sm:h-16 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8 5V19L19 12L8 5Z" fill="white" />
		</svg>
	</div>
);

interface AppPreviewProps {
	isSticky: boolean;
	isAligned: boolean;
}

const AppPreview: React.FC<AppPreviewProps> = ({ isSticky, isAligned }) => (
	<div
		className={`relative w-[280px] mx-auto transform transition-all duration-500 
      ${isSticky ? 'rotate-0' : 'rotate-6'}
      ${isAligned ? 'mr-24' : 'mx-auto'}`}
	>
		<div className="relative border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
			<div className="relative pt-[177.78%]">
				<div className="absolute top-0 left-0 w-full h-full bg-gray-200" />
			</div>
			<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black rounded-full" />
			<button
				className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-200"
				aria-label="Play demo video"
			>
				<PlayIcon />
			</button>
		</div>
		<div className="absolute -z-10 top-4 left-4 w-full h-full rounded-xl bg-[#FF6B6B]" />
	</div>
);

const HeroSection: React.FC = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isAligned, setIsAligned] = useState(false);
	const heroRef = useRef<HTMLElement>(null);
	const { ref: deviceSectionRef, inView: showDeviceSection } = useInView({
		threshold: 0.5,
		triggerOnce: false
	});

	useEffect(() => {
		const handleScroll = () => {
			if (heroRef.current) {
				const heroRect = heroRef.current.getBoundingClientRect();
				setIsSticky(heroRect.top <= 0);
				setIsAligned(window.scrollY > window.innerHeight * 0.8);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<section ref={heroRef} className="min-h-screen">
				<div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row">
					<div className="md:w-1/2">
						<h1 className="text-7xl font-semibold mb-4">
							Pocket Six-Pack for Pilots (and Cats)
						</h1>
						<p className="text-2xl mb-6">
							Open-source portable flight instrument suite powered by Arduino, React-Native and love for flying.
						</p>
					</div>
					<div className={`md:w-1/2 transition-all duration-500 ${isSticky ? 'fixed top-24 right-12' : 'relative'}`}>
						<AppPreview isSticky={isSticky} isAligned={isAligned} />
					</div>
				</div>
			</section>

			<section
				ref={deviceSectionRef}
				className={`min-h-screen bg-[#AE7AFF] transition-opacity duration-500 ${showDeviceSection ? 'opacity-100' : 'opacity-0'
					}`}
			>
				<div className="p-12 flex items-center justify-center min-h-screen">
					<div className="text-center">
						<h2 className="text-5xl font-bold mb-4">Turn data into insights</h2>
						<p className="text-2xl mb-6">
							Connect your device and start exploring your flight data
						</p>
						<button
							className="px-8 py-3 bg-black text-white font-bold border-2 border-black
                shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
                hover:translate-x-1 hover:translate-y-1 transition-transform"
						>
							Get Started
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;