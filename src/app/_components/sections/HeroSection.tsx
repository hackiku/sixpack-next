// ~/app/_components/sections/HeroSection.tsx
"use client";

import EmailForm from "../cta/EmailForm";

export default function HeroSection() {
	return (
		<section
			className="min-h-[90vh] pt-12 relative overflow-hidden"
			style={{
				backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
				backgroundSize: '32px 32px'
			}}
		>
			<div className="container mx-auto px-6">
				<div className="md:w-1/2 flex flex-col justify-start">
					<h1 className="text-4xl md:text-7xl font-bold mt-24 mb-6">
						Avionics for Pilots (and Cats)
					</h1>
					<p className="text-xl md:text-2xl mb-8">
						Open-source portable flight instrument suite powered by Arduino,
						React-Native and love for flying.
					</p>
					<EmailForm />
				</div>
			</div>
		</section>
	);
}

