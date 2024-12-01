// ~/app/_components/demo/ResponsiveAppDemo.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLayout } from '~/app/providers/LayoutContext';

const SCREENS = [
	{ id: 'instruments', title: 'Digital Six Pack', bg: 'bg-[#A6FAFF]' },
	{ id: 'connectivity', title: 'Flight Dashboard', bg: 'bg-[#AE7AFF]' },
	{ id: 'cat', title: 'Cat Mode', bg: 'bg-[#FFB6C1]' },
] as const;

export default function ResponsiveAppDemo() {
	const { isMobile, scrollPhase, progress, shouldShowApp } = useLayout();

	const getInitialStyles = () => ({
		x: isMobile ? '-50%' : '5vw',
		y: isMobile ? '50vh' : 0,
		rotate: 12,
		scale: isMobile ? 0.8 : 1,
	});

	const getFeaturesStyles = () => ({
		x: isMobile ? '-50%' : '-35vw',
		y: isMobile ? '33vh' : `${Math.min(progress * 200, 24)}px`,
		rotate: 0,
		scale: isMobile ? 0.7 : 0.85,
	});

	// Changed logic to maintain last screen
	const screenIndex = Math.min(
		2,
		Math.floor((scrollPhase === 'features' || scrollPhase === 'exit') ? progress * 3 : 0)
	);

	if (!shouldShowApp) return null;

	return (
		<AnimatePresence>
			<motion.div
				className={`
          fixed z-10
          ${isMobile ? 'left-1/2' : 'left-[55%]'}
          ${scrollPhase === 'hero' ? 'top-[20vh]' : 'top-24'}
        `}
				animate={scrollPhase === 'hero' ? getInitialStyles() : getFeaturesStyles()}
				exit={{ opacity: 0, y: 50 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				style={{ width: 320 }}
			>
				<div className="relative">
					<div className="relative border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
						<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black rounded-full z-20" />
						<div className="relative pt-[177.78%]">
							<motion.div className="absolute inset-0">
								{SCREENS.map((screen, index) => (
									<motion.div
										key={screen.id}
										className={`absolute inset-0 ${screen.bg} flex flex-col items-center justify-center p-6`}
										initial={{ opacity: 0 }}
										animate={{
											opacity: screenIndex === index ? 1 : 0,
											// Added scale transform for smoother transitions
											scale: screenIndex === index ? 1 : 0.95
										}}
										transition={{
											duration: 0.4,
											ease: "easeInOut"
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
					<div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-[#FF6B6B]" />
				</div>
			</motion.div>
		</AnimatePresence>
	);
}