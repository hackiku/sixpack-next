// ~/app/page.tsx

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "~/app/_components/sections/HeroSection";
import FeaturesSection from "~/app/_components/sections/FeaturesSection";
// import HardwareSection from "~/app/_components/sections/HardwareSection";
import CtaSection from "~/app/_components/sections/CtaSection";
import Footer from "~/app/_components/layout/Footer";
import AppDemo from "~/app/_components/demo/AppDemo";

export default function HomePage() {
	const mainRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: mainRef,
		offset: ["start start", "end start"]
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<main ref={mainRef} className="bg-gray-300/70 relative">
			<div
				className="relative"
				style={{
					backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
					backgroundSize: '32px 32px'
				}}
			>
				<motion.div style={{ opacity }}>
					<HeroSection />
				</motion.div>
				<AppDemo scrollYProgress={scrollYProgress} />
				<FeaturesSection />
			</div>

			<div className="bg-[#AE7AFF]">
				{/* <HardwareSection /> */}
				<CtaSection />
			</div>
			<Footer />
		</main>
	);
}

