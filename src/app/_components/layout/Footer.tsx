// ~/app/_components/layout/Footer.tsx

import EmailForm from "../cta/EmailForm";

export default function Footer() {
	return (
		<footer className="bg-[#FFE8D6] border-t-4 border-black">
			<div className="container mx-auto px-6 py-12">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Left Column: Logo & Email */}
					<div>
						<div className="flex items-center gap-2 mb-8">
							<span className="text-4xl">🦩</span>
							<span className="text-3xl font-black">6Pack</span>
						</div>
						<div className="max-w-sm">
							<EmailForm variant="stacked" />
						</div>
					</div>

					{/* Right Column: Buy me fuel */}
					<div className="flex flex-col items-start justify-center">
						<a
							href="https://buymeacoffee.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="
                group
                px-8 py-4 text-xl
                border-4 border-black
                bg-[#FFDB58]
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-y-1
                transition-all duration-200
                font-bold
                relative
                overflow-hidden
              "
						>
							{/* Fuel droplets background pattern */}
							<div
								className="absolute inset-0 opacity-20"
								style={{
									backgroundImage: `
                    radial-gradient(circle at 33% 33%, black 2%, transparent 3%),
                    radial-gradient(circle at 66% 66%, black 2%, transparent 3%)
                  `,
									backgroundSize: '24px 24px',
								}}
							/>

							<span className="relative z-10 flex items-center gap-2">
								<span>⛽️</span>
								<span>Buy Me Avgas 100LL</span>
							</span>
						</a>

						{/* Copyright */}
						<p className="mt-8 text-sm opacity-60">
							© {new Date().getFullYear()} 6Pack.cc
							<br />
							Made with ❤️ for pilots and cats
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}