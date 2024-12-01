// ~/app/page.tsx

// ~/app/page.tsx
"use client";

import { LayoutProvider } from "~/app/providers/LayoutContext";
import ResponsiveAppDemo from "~/app/_components/demo/ResponsiveAppDemo";
import EmailForm from "~/app/_components/cta/EmailForm";

export default function HomePage() {
	return (
		<LayoutProvider>
			<main className="bg-gray-300/70">
				<div
					className="relative min-h-[300vh]"
					style={{
						backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
						backgroundSize: '32px 32px'
					}}
				>
					{/* Hero Section */}
					<section className="min-h-[90vh] pt-12">
						<div className="container mx-auto px-6">
							<div className="md:w-2/3 flex flex-col justify-start">
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

					{/* Features Section */}
					<section className="py-24">
						<div className="container mx-auto px-6">
							<div className="md:w-1/2 md:ml-[45%] space-y-48">
								{[
									{
										title: "Digital Six Pack",
										description: "Complete flight instrument suite in your pocket.",
										color: "#A6FAFF"
									},
									{
										title: "Bluetooth Connectivity",
										description: "Seamlessly connect to sensors for real-time data.",
										color: "#AE7AFF"
									},
									{
										title: "Cat Mode",
										description: "Track your cat's adventures with aviation precision.",
										color: "#FFB6C1"
									}
								].map((feature, index) => (
									<div
										key={index}
										className="relative"
									>
										<div className="border-4 border-black rounded-xl p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
											<h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
											<p className="text-xl text-gray-600">{feature.description}</p>
										</div>

										<div
											className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-xl"
											style={{ background: feature.color }}
										/>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* App Demo */}
					<ResponsiveAppDemo />
				</div>
			</main>
		</LayoutProvider>
	);
}