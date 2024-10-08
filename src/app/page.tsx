import Link from "next/link";
import { api } from "~/trpc/server";
import HomeClient from "./HomeClient";
import ProductShow from "./_components/ProductShow";

export default async function Home() {
	const hello = await api.post.hello({ text: "from tRPC" });

	return (
		<main className="p-6 sm:p-8 md:p-12 bg-white">
			{/* Hero Section */}
			<section className="mb-16 md:w-5/6">
				<h1 className="text-7xl font-semibold mb-4">Pocket Six-Pack for Pilots (and Cats)</h1>
				<p className="text-2xl mb-6">
					Open-source portable flight instrument suite powered by Arduino, React-Native and love for flying. Currently in feline beta testing.
				</p>
				<HomeClient />
			</section>

			<hr className="border-2 mb-6 border-black"/>
			{/* -------------------------------------------- */}
			
			<section>
				<ProductShow />
			</section>

			{/* -------------------------------------------- */}
			<hr className="border-2 mb-6 border-black"/>

			{/* Open Source Section */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-4">Open Source</h2>
				<p className="text-xl mb-4">
					We believe in the power of community. That&apos;s why our project is open source, allowing developers and enthusiasts to contribute, modify, and improve the system.
				</p>
				<Link
					href="https://github.com/yourusername/sixpack-avionics"
					className="inline-block text-xl font-semibold px-6 py-2 border-2 border-black bg-[#AE7AFF] hover:bg-[#d71e97]
					shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
					transition-all duration-200"
				>
					Check out our GitHub →
				</Link>
			</section>


			{/* -------------------------------------------- */}
			
			<hr className="border-2 mb-6 border-black"/>

			{/* Split Screen Section */}
			<h2 className="text-4xl font-bold mb-4">Adding right rudder has never been easier</h2>
			<section className="flex flex-col md:flex-row gap-8 mb-16">
				<div className="w-full md:w-1/2 rounded-[2em] border-4 border-black px-8 py-12 bg-[#F65A4D]">
					<h2 className="text-4xl font-bold mb-4">For Pilots</h2>
					<p className="text-xl mb-4">Add right rudder and digitize flight data (that stays yours). For GA and gliders.</p>
					<div className="aspect-video bg-black flex items-center justify-center text-white">
						[Placeholder for pilot video]
					</div>
				</div>
				<div className="w-full md:w-1/2 rounded-[2em] border-4 border-black px-8 py-12 bg-[#FFDB58]">
					<h2 className="text-4xl font-bold mb-4">For Cats</h2>
					<p className="text-xl mb-4">Yes, we&apos;re testing on animals! Track your cat&apos;s adventures around the house.</p>
					<div className="aspect-video bg-black flex items-center justify-center text-white">
						[Placeholder for cat video]
					</div>
				</div>
			</section>

			{/* -------------------------------------------- */}
			<hr className="border-2 mb-6 border-black" />


			{/* Features Section */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-8">Features</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{[
						{ title: "6DOF Sensing", description: "Measure pitch, roll, yaw, and acceleration in three axes." },
						{ title: "Airspeed", description: "Accurate airspeed measurements for precise flight data." },
						{ title: "GPS Tracking", description: "Log your exact position and path during flight or feline adventures." },
						{ title: "Compass/Heading", description: "Always know your orientation with integrated compass." },
						{ title: "Bluetooth Connectivity", description: "Seamless data transmission to your mobile device." },
						{ title: "Data Logging", description: "Store and analyze your flight or cat movement data over time." },
					].map((feature, index) => (
						<div key={index} className="border-2 border-black p-4 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
							<h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
							<p>{feature.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* -------------------------------------------- */}
			<hr className="border-2 mb-6 border-black" />


			{/* Timeline Section */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-8">Project Timeline</h2>
				<div className="flex flex-wrap justify-between">
					{[
						{ phase: "Proof of Concept", status: "completed" },
						{ phase: "App Beta (Android & iOS)", status: "in-progress" },
						{ phase: "Custom Hardware (PCB)", status: "not-started" },
						{ phase: "Distribution", status: "not-started" },
						{ phase: "Certification", status: "not-started" },
					].map((item, index) => (
						<div key={index} className={`w-16 h-16 rounded-full border-4 border-black flex items-center justify-center text-2xl font-bold mb-4 ${item.status === 'completed' ? 'bg-green-400' :
							item.status === 'in-progress' ? 'bg-yellow-400' : 'bg-white'
							}`}>
							{index + 1}
						</div>
					))}
				</div>
			</section>

			{/* Zigzag Section */}
			<section className="mb-16">
				<div className="flex flex-col md:flex-row items-center mb-8">
					<div className="w-full md:w-1/2 p-8">
						<h3 className="text-5xl font-semibold mb-4">More Right Rudder</h3>
						<p className="text-2xl">Digitalize your flights and learn from the data.</p>
					</div>
					<div className="w-full md:w-1/2 bg-gray-200 h-64 flex items-center justify-center">
						[Pilot Image]
					</div>
				</div>
				<div className="flex flex-col md:flex-row-reverse items-center">
					<div className="w-full md:w-1/2 p-8">
						<h3 className="text-3xl font-bold mb-4">For the Adventurous Pilot</h3>
						<ul className="list-disc pl-5">
							<li>Real-time flight data on your phone</li>
							<li>Log and analyze your flights</li>
							<li>Improve your piloting skills with data-driven insights</li>
						</ul>
					</div>
					<div className="w-full md:w-1/2 bg-gray-200 h-64 flex items-center justify-center">
						[Pilot Image Placeholder]
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="text-center bg-[#AE7AFF] p-12 border-4 border-black">
				<h2 className="text-5xl font-bold mb-4">Turn off airplane mode</h2>
				<p className="text-xl mb-6">Join our journey in revolutionizing flight data for pilots and cat owners alike!</p>
				<div className="flex justify-center gap-6">
					<Link
						href="#"
						className="text-xl font-semibold px-6 py-2 border-2 border-black bg-[#AE7AFF] hover:bg-[#d71e97]
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                      transition-all duration-200"
					>
						Pre-order Now
					</Link>
					<Link
						href="#"
						className="text-xl font-semibold px-6 py-2 border-2 border-black bg-white
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                      transition-all duration-200"
					>
						Join Our Newsletter
					</Link>
				</div>
			</section>

		</main>
	);
}