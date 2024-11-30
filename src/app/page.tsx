// ~/app/page.tsx

"use client";

import HeroSection from "~/app/_components/sections/HeroSection";
import FeaturesSection from "~/app/_components/sections/FeaturesSection";
import HardwareSection from "~/app/_components/sections/HardwareSection";
import CtaSection from "~/app/_components/sections/CtaSection";
import Footer from "~/app/_components/layout/Footer";
import { useInView } from 'react-intersection-observer';

export default function HomePage() {
	return (
		<main className="bg-white relative">
			{/* Dot pattern background wrapper */}
			<div className="relative"
				style={{
					backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
					backgroundSize: '32px 32px'
				}}
			>
				<HeroSection />
				<FeaturesSection />
			</div>

			{/* Purple sections */}
			<div className="bg-[#AE7AFF]">
				<HardwareSection />
				<CtaSection />
			</div>
			<Footer />
		</main>
	);
}