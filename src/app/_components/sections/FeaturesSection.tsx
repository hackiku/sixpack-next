// ~/app/_components/sections/FeaturesSection.tsx

"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeaturesSection() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const features = [
		{
			title: "Real-time Flight Data",
			description: "Get instant access to critical flight metrics with our advanced sensors."
		},
		{
			title: "Cross-Platform Support",
			description: "Available on both iOS and Android devices for maximum compatibility."
		},
		{
			title: "Open Source",
			description: "Built with transparency and community collaboration in mind."
		}
	];

	return (
		<section ref={ref} className="py-24">
			<div className="container mx-auto px-6">
				<div className="max-w-xl ml-8 md:ml-24">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className="mb-32"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
							<p className="text-xl text-gray-600">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

