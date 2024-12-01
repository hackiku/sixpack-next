// ~/app/_components/demo/ResponsiveAppDemo.tsx

import { motion } from 'framer-motion';
import { useLayout } from '~/app/providers/LayoutContext';

const SCREENS = [
	{ id: 'instruments', title: 'Digital Six Pack', bg: 'bg-[#A6FAFF]' },
	{ id: 'home', title: 'Flight Dashboard', bg: 'bg-[#AE7AFF]' },
	{ id: 'cat', title: 'Cat Mode', bg: 'bg-[#FFB6C1]' },
] as const;

export default function ResponsiveAppDemo() {
	const { isMobile, scrollPhase, progress } = useLayout();

	// Define transforms based on scroll phase and progress
	const getInitialStyles = () => {
		if (isMobile) {
			return {
				x: '-50%',  // Center in viewport
				y: '50vh',  // Start below hero
				rotate: 12,
				scale: 0.8,
			};
		}
		return {
			x: '15vw',  // Adjusted to start closer to text
			y: 0,
			rotate: 12,
			scale: 1,
		};
	};

	const getFeaturesStyles = () => {
		if (isMobile) {
			return {
				x: '-50%',  // Keep centered
				y: '33vh',  // 1/3 down viewport
				rotate: 0,
				scale: 0.7,
			};
		}
		return {
			x: '-25vw',  // Aligned with grid
			y: 24,
			rotate: 0,
			scale: 0.85,
		};
	};

	// Screen index based on features scroll
	const screenIndex = Math.min(
		2,
		Math.floor(scrollPhase === 'features' ? progress * 3 : 0)
	);

	return (
		<motion.div
			className={`
        fixed z-10
        ${isMobile ? 'left-1/2' : 'right-[15vw]'}  // Adjusted positioning
        ${scrollPhase === 'hero' ? 'top-[20vh]' : 'top-24'}
      `}
			animate={scrollPhase === 'hero' ? getInitialStyles() : getFeaturesStyles()}
			transition={{ duration: 0.5 }}
			style={{ width: 320 }}
		>
			{/* Phone Frame */}
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
									animate={{ opacity: screenIndex === index ? 1 : 0 }}
									transition={{ duration: 0.3 }}
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

				{/* Shadow Element */}
				<div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-[#FF6B6B]" />
			</div>
		</motion.div>
	);
}