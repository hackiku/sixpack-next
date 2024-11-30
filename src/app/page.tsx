// @/app/page.tsx

"use client";

import { useEffect, useState } from 'react';
import EmailForm from "~/app/_components/cta/EmailForm";
import AppDemo from "~/app/_components/demo/AppDemo";
import DeviceDemo from "~/app/_components/demo/DeviceDemo";

interface ScrollState {
	isSticky: boolean;
	progress: number;
	showDevice: boolean;
	showFeatures: boolean;
	aligned: boolean;
}

export default function HomePage() {
	const [scrollState, setScrollState] = useState<ScrollState>({
		isSticky: false,
		progress: 0,
		showDevice: false,
		showFeatures: false,
		aligned: false,
	});

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			setScrollState({
				isSticky: scrollY > 100,
				progress: Math.min(scrollY / windowHeight, 1),
				showDevice: scrollY > windowHeight * 0.8,
				showFeatures: scrollY > windowHeight * 0.4,
				aligned: scrollY > windowHeight * 1.2,
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<main className="bg-white relative">
			
			{/* Hero ---------------------- */}
			<section
				className="min-h-screen pt-12 pb-32 relative overflow-hidden"
				style={{
					backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
					backgroundSize: '32px 32px'
				}}
			>
				<div className="container mx-auto px-6 flex flex-col md:flex-row">
					<div className="w-full md:w-2/3 pr-0 md:pr-12 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-7xl font-bold mb-6">
							Pocket Six-Pack Avionics for Pilots (and Cats)
						</h1>
						<p className="text-xl md:text-2xl">
							Open-source portable flight instrument suite powered by Arduino, React-Native and love for flying.
						</p>
						<EmailForm
							platform="android"
							onSuccess={() => console.log('Success!')}
						/>
					</div>
					<div className="w-full md:w-1/3">
						<AppDemo
							isSticky={scrollState.isSticky}
							scrollProgress={scrollState.progress}
						/>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="min-h-screen">
				<div
					className={`container mx-auto px-6 py-24 transition-opacity duration-500 
            ${scrollState.showFeatures ? 'opacity-100' : 'opacity-0'}`}
				>
					<div className="ml-0 md:ml-24 max-w-xl">
						<h2 className="text-4xl font-bold mb-4">Real-time Flight Data</h2>
						<p className="text-xl mb-8">Transform your device into a smart instrument panel</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[
								'Attitude',
								'Airspeed',
								'Altitude',
								'GPS'
							].map((feature) => (
								<div
									key={feature}
									className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
								>
									{feature}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Device Demo */}
			<DeviceDemo opacity={scrollState.showDevice ? 1 : 0} />

			{/* Hardware Section */}
			<section
				className={`min-h-screen transition-colors duration-500 
          ${scrollState.aligned ? 'bg-[#AE7AFF]' : 'bg-white'}`}
			>
				<div className="container mx-auto px-6 py-24 text-center">
					<h2 className="text-5xl font-bold mb-6">Hardware meets Software</h2>
					<button className="px-8 py-3 bg-black text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-transform">
						Get Started →
					</button>
				</div>
			</section>

			{/* Timeline */}
			<section className="bg-[#AE7AFF] py-24">
				<div className="container mx-auto px-6">
					<h2 className="text-5xl font-bold mb-12">Project Timeline</h2>
					<div className="flex justify-between items-center">
						{[
							{ phase: 'Proof of Concept', status: 'complete' },
							{ phase: 'Beta', status: 'current' },
							{ phase: 'Hardware', status: 'upcoming' },
							{ phase: 'Distribution', status: 'upcoming' }
						].map((item, i) => (
							<div
								key={item.phase}
								className={`w-16 h-16 rounded-full border-4 border-black flex items-center justify-center
                  ${item.status === 'complete' ? 'bg-green-400' :
										item.status === 'current' ? 'bg-yellow-400' : 'bg-white'}`}
							>
								{i + 1}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-[#AE7AFF] py-24 border-t-4 border-black">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-5xl font-bold mb-6">Turn off airplane mode</h2>
					<p className="text-xl mb-8">Join our journey in revolutionizing flight data</p>
					<button className="px-8 py-3 bg-[#FF6B6B] text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform">
						Pre-order Now →
					</button>
				</div>
			</section>
		</main>
	);
}