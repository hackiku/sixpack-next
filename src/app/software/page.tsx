// app/software/page.tsx

import Link from 'next/link';

export default function Software() {
	return (
		<main className="p-6 sm:p-8 md:p-12 bg-[#FFF8EE]">
			{/* Hero Section */}
			<section className="mb-16">
				<h1 className="text-7xl font-semibold mb-4">SixPack Software</h1>
				<p className="text-2xl mb-6">
					Experience the power of our React Native app for Android and iOS.
				</p>
				<div className="flex gap-6">
					<Link
						href="#"
						className="text-xl font-semibold px-6 py-2 border-2 border-black bg-[#AE7AFF] hover:bg-[#d71e97]
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                      transition-all duration-200 flex items-center justify-center"
					>
						Download App
					</Link>
					<Link
						href="https://github.com/yourusername/sixpack-app"
						className="text-xl font-semibold px-6 py-2 border-2 border-black bg-white
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                      transition-all duration-200 flex items-center justify-center"
					>
						GitHub
					</Link>
				</div>
			</section>

			{/* Features */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-8">App Features</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="border-4 border-black p-6 bg-[#F65A4D] transform rotate-2">
						<h3 className="text-3xl font-bold mb-4">Real-time Data</h3>
						<p>View live flight data streamed from your SixPack hardware.</p>
					</div>
					<div className="border-4 border-black p-6 bg-[#FFDB58] transform -rotate-1">
						<h3 className="text-3xl font-bold mb-4">Flight Logging</h3>
						<p>Record and analyze your flights with detailed logs and statistics.</p>
					</div>
					<div className="border-4 border-black p-6 bg-[#AE7AFF] transform rotate-1">
						<h3 className="text-3xl font-bold mb-4">Cat Mode</h3>
						<p>Switch to cat mode to track your feline friend's daily adventures.</p>
					</div>
				</div>
			</section>

			{/* Screenshots */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-8">App Screenshots</h2>
				<div className="flex overflow-x-auto gap-4 pb-4">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="flex-shrink-0 w-64 h-128 bg-gray-200 flex items-center justify-center border-2 border-black">
							[Screenshot {i}]
						</div>
					))}
				</div>
			</section>

			{/* Testimonials */}
			<section className="mb-16">
				<h2 className="text-5xl font-bold mb-8">What Users Say</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="border-2 border-black p-6 bg-white transform rotate-1">
						<p className="italic mb-4">"This app has revolutionized my flying experience!"</p>
						<p className="font-bold">- John Doe, Private Pilot</p>
					</div>
					<div className="border-2 border-black p-6 bg-white transform -rotate-1">
						<p className="italic mb-4">"I finally know what my cat does all day!"</p>
						<p className="font-bold">- Jane Smith, Cat Enthusiast</p>
					</div>
				</div>
			</section>
		</main>
	);
}