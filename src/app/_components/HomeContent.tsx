// _components/HomeContent.tsx

'use client';

import { useEffect, useState } from 'react';
import AppDemo from "./demo/AppDemo";
import DeviceDemo from "./demo/DeviceDemo";

export default function HomeContent() {
	const [scrollState, setScrollState] = useState({
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
		<>
			{/* Hero */}
			<section className="min-h-screen pt-12 pb-32 relative overflow-hidden"
				style={{
					backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
					backgroundSize: '32px 32px'
				}}>
				{/* Hero content */}
			</section>

			{/* Rest of the sections */}
		</>
	);
}
