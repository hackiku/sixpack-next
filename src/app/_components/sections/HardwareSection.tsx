// ~/app/_components/sections/HardwareSection.tsx

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function HardwareSection() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	return (
		<section ref={ref} className="min-h-screen py-24 border-t-4 border-black">
			<div className="container mx-auto px-6">
				{/* Split Screen */}
				<div className="flex flex-col md:flex-row gap-8 mb-16">
					<div className="w-full md:w-1/2 rounded-[2em] border-4 border-black px-8 py-12 bg-[#F65A4D]">
						<h2 className="text-4xl font-bold mb-4">For Pilots</h2>
						<p className="text-xl mb-4">Add right rudder and digitize flight data (that stays yours). For GA and gliders.</p>
						<div className="aspect-video border-4 border-black bg-black flex items-center justify-center text-white">
							Flight Preview
						</div>
					</div>

					<div className="w-full md:w-1/2 rounded-[2em] border-4 border-black px-8 py-12 bg-[#FFDB58]">
						<h2 className="text-4xl font-bold mb-4">For Cats</h2>
						<p className="text-xl mb-4">Yes, we're testing on animals! Track your cat's adventures around the house.</p>
						<div className="aspect-video border-4 border-black bg-black flex items-center justify-center text-white">
							Cat Preview
						</div>
					</div>
				</div>

				{/* Feature Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{[
						{ title: "6DOF Sensing", desc: "Measure pitch, roll, yaw, and acceleration in three axes." },
						{ title: "Airspeed", desc: "Accurate airspeed measurements for precise flight data." },
						{ title: "GPS Tracking", desc: "Log your exact position and path during flight." },
						{ title: "Compass", desc: "Always know your orientation with integrated compass." },
						{ title: "Bluetooth", desc: "Seamless data transmission to your mobile device." },
						{ title: "Data Logging", desc: "Store and analyze your flight data over time." },
					].map((feature) => (
						<div
							key={feature.title}
							className="border-4 border-black bg-white p-6
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-200"
						>
							<h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
							<p>{feature.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}