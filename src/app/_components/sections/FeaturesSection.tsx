// ~/app/_components/sections/FeaturesSection.tsx

"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function AppPreview() {
	const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className={`
        relative w-[320px] mx-auto -mt-32 md:-mt-64
        transform transition-all duration-700
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}
      `}
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
}

export default function FeaturesSection() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	return (
		<section ref={ref} className="relative pt-24 pb-32">
			<AppPreview />

			<div className={`
        container mx-auto px-6 mt-12
        transform transition-all duration-700
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}
      `}>
				<div className="max-w-xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-8">Real-time Flight Data</h2>

					<div className="grid grid-cols-2 gap-6">
						{[
							{ title: 'Attitude', desc: 'Precise pitch & roll' },
							{ title: 'Airspeed', desc: 'Digital readout' },
							{ title: 'Altitude', desc: 'Barometric pressure' },
							{ title: 'GPS', desc: 'Position tracking' }
						].map((feature) => (
							<div
								key={feature.title}
								className="p-6 border-4 border-black bg-white
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  transition-all duration-200"
							>
								<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
								<p>{feature.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}