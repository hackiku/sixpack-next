// ~/app/_components/sections/FeaturesSection.tsx
"use client";
import { motion } from 'framer-motion';

const features = [
	{
		id: 'instruments',
		title: "Digital Six Pack",
		description: "Complete flight instrument suite in your pocket. Attitude, airspeed, altitude, vertical speed, heading, and turn coordinator.",
		color: '#A6FAFF'
	},
	{
		id: 'connectivity',
		title: "Bluetooth Connectivity",
		description: "Seamlessly connect to Arduino-powered sensors for real-time flight data. Open source hardware and software.",
		color: '#AE7AFF'
	},
	{
		id: 'cat-mode',
		title: "Cat Mode",
		description: "Yes, we're testing on animals! Track your cat's adventures around the house with the same precision as aircraft.",
		color: '#FFB6C1'
	}
];

export default function FeaturesSection() {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6">
				{/* Changed to right alignment */}
				<div className="md:w-1/2 md:ml-auto space-y-48">
					{features.map((feature) => (
						<motion.div
							key={feature.id}
							className="relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{
								opacity: 1,
								y: 0
							}}
							viewport={{
								once: true,
								margin: "-100px"
							}}
							transition={{
								duration: 0.5,
								delay: 0.2
							}}
						>
							<div className="border-4 border-black rounded-xl p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
								<h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
								<p className="text-xl text-gray-600">{feature.description}</p>
							</div>

							<div
								className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-xl"
								style={{ background: feature.color }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}