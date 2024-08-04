// app/hardware/page.tsx

import Link from 'next/link';

export default function Hardware() {
	return (
		<main className="p-6 sm:p-8 md:p-12 bg-[#FFF8EE]">
			{/* Hero Section */}
			<section className="mb-16">
				<h1 className="text-7xl font-semibold mb-4">SixPack Hardware</h1>
				<p className="text-2xl mb-6">
					Build your own portable flight instrument suite with Arduino and sensors.
				</p>
				<div className="flex gap-6">
					<Link
						href="#"
						className="text-xl font-semibold px-6 py-2 border-2 border-black bg-[#AE7AFF] hover:bg-[#d71e97]
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                      transition-all duration-200 flex items-center justify-center"
					>
						Download Instructions
					</Link>
					<Link
						href="https://github.com/yourusername/sixpack-hardware"
						className="text-xl font-semibold px-6 py-2 border-2 border-black bg-white
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                      transition-all duration-200 flex items-center justify-center"
					>
						GitHub
					</Link>
				</div>
			</section>

			{/* Components Overview */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-8">Components</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="border-4 border-black p-6 bg-[#F65A4D]">
						<h3 className="text-3xl font-bold mb-4">Arduino Nano 33 BLE</h3>
						<p>The brain of our operation, packed with sensors and Bluetooth connectivity.</p>
					</div>
					<div className="border-4 border-black p-6 bg-[#FFDB58]">
						<h3 className="text-3xl font-bold mb-4">GPS Module</h3>
						<p>Precise location tracking for your flights or feline adventures.</p>
					</div>
					<div className="border-4 border-black p-6 bg-[#AE7AFF]">
						<h3 className="text-3xl font-bold mb-4">Pressure Sensor</h3>
						<p>Measure atmospheric pressure for accurate altitude readings.</p>
					</div>
					<div className="border-4 border-black p-6 bg-[#4DFF4D]">
						<h3 className="text-3xl font-bold mb-4">Custom PCB</h3>
						<p>Designed for compact and reliable connections between components.</p>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-8">Gallery</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div key={i} className="aspect-square bg-gray-200 flex items-center justify-center border-2 border-black">
							[Image {i}]
						</div>
					))}
				</div>
			</section>
		</main>
	);
}