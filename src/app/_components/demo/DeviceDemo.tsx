// components/demo/DeviceDemo.tsx
import React from 'react';

const DeviceDemo = ({ opacity = 0 }) => (
	<div
		className="fixed top-12 left-12 w-[400px] transition-opacity duration-500"
		style={{ opacity }}
	>
		<div className="border-4 border-black rounded-2xl p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
			<div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
				<span className="text-gray-500">Arduino Device</span>
			</div>
		</div>
		<div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-[#A6FAFF]" />
	</div>
);

export default DeviceDemo;