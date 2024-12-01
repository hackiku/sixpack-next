// ~/app/components/demo/AppDemo.tsx

"use client";

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { MotionValue } from 'framer-motion';

interface AppDemoProps {
	scrollYProgress: MotionValue<number>;
}

// Mock screens for the demo
const DEMO_SCREENS = [
	{ id: 'instruments', title: 'Digital Six Pack', bg: 'bg-[#A6FAFF]' },
	{ id: 'home', title: 'Flight Dashboard', bg: 'bg-[#AE7AFF]' },
	{ id: 'cat', title: 'Cat Mode', bg: 'bg-[#FFB6C1]' },
];

export default function AppDemo({ scrollYProgress }: AppDemoProps) {
	const containerRef = useRef(null);

	// Quick initial rotation and movement to position (0-15% scroll)
	const rotate = useTransform(scrollYProgress, [0, 0.15], [12, 0]);

	// Move to left side quicker (complete by 25% scroll)
	const x = useTransform(scrollYProgress,
		[0, 0.15, 0.25],
		[0, -200, -400]  // Moves fully to left side
	);

	const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);

	// Screen transitions - synced with features (25-75% scroll)
	const screenIndex = useTransform(scrollYProgress,
		[0.25, 0.4, 0.6, 0.75], // Adjusted timing to match features
		[0, 1, 2, 2]  // Stay on last screen
	);

	// Fade out as we leave features section
	const opacity = useTransform(scrollYProgress,
		[0.75, 0.85],
		[1, 0]
	);

	return (
		<motion.div
			ref={containerRef}
			className="fixed top-24 right-12 w-[320px] z-10"
			style={{ x, rotate, scale, opacity }}
		>
			{/* Phone frame */}
			<div className="relative border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
				{/* Notch */}
				<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black rounded-full z-20" />

				{/* Screen content */}
				<div className="relative pt-[177.78%]">
					<motion.div className="absolute inset-0 flex items-center justify-center">
						{DEMO_SCREENS.map((screen, index) => (
							<motion.div
								key={screen.id}
								className={`absolute inset-0 ${screen.bg} flex flex-col items-center justify-center p-6`}
								style={{
									opacity: useTransform(
										screenIndex,
										[index - 0.5, index, index + 0.5],
										[0, 1, 0]
									)
								}}
							>
								<span className="text-xl font-bold text-black text-center mb-2">
									{screen.title}
								</span>
								<div className="w-full h-48 border-2 border-black rounded-lg bg-black/10" />
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Decorative background */}
			<div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-[#FF6B6B]" />
		</motion.div>
	);
}