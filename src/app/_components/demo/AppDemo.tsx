// components/demo/AppDemo.tsx

import React, { useEffect, useState } from 'react';

const AppDemo = ({ isSticky = false, scrollProgress = 0 }) => {
	const [position, setPosition] = useState({ x: 0, scale: 1 });

	useEffect(() => {
		if (isSticky) {
			setPosition({
				x: -Math.min(scrollProgress * 100, 30),
				scale: 1 - Math.min(scrollProgress * 0.1, 0.1)
			});
		}
	}, [isSticky, scrollProgress]);

	return (
		<div
			className={`relative w-[320px] transition-all duration-300 ease-out
        ${isSticky ? 'fixed top-12 right-12' : 'relative -mb-32'}`}
			style={{
				transform: `translateX(${position.x}%) scale(${position.scale})`
			}}
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
		</div>
	);
};

export default AppDemo;