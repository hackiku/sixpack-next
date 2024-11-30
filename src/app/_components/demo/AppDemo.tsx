// components/demo/AppDemo.tsx

"use client";

import { motion, useTransform, MotionValue } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface AppDemoProps {
	scrollYProgress: MotionValue<number>;
}

const AppDemo: React.FC<AppDemoProps> = ({ scrollYProgress }) => {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const rotate = useTransform(scrollYProgress, [0, 0.5], [12, 0]);
	const x = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

	const mobileY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

	return (
		<motion.div
			className={`w-[320px] ${isMobile ? 'relative mx-auto mt-12' : 'fixed top-24 right-12'}`}
			style={isMobile ? { y: mobileY } : { x, rotate, scale }}
		>
			<div className="relative border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
				<div className="relative pt-[177.78%]">
					<div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
						<span className="text-gray-500">App UI</span>
					</div>
				</div>
				<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black rounded-full" />
			</div>
			<div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-[#FF6B6B]" />
		</motion.div>
	);
};

export default AppDemo;

