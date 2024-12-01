// ~/app/_components/sections/CtaSection.tsx
"use client";

import EmailForm from "../cta/EmailForm";
import { useInView } from 'react-intersection-observer';

export default function CtaSection() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	return (
		<section
			ref={ref}
			className={`
        py-24 border-t-4 border-black text-center bg-[#AE7AFF]
        transform transition-all duration-700
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}
      `}
		>

			<div className="container mx-auto px-6">
				{/* Timeline */}
				<div className="mb-24">
					<h2 className="text-5xl font-bold mb-12">Project Timeline</h2>
					<div className="flex justify-between items-center max-w-2xl mx-auto">
						{[
							{ phase: 'Proof of Concept', status: 'complete' },
							{ phase: 'App Beta', status: 'current' },
							{ phase: 'Hardware', status: 'upcoming' },
							{ phase: 'Distribution', status: 'upcoming' }
						].map((item, i) => (
							<div key={item.phase} className="flex flex-col items-center gap-2">
								<div className={`
                  w-16 h-16 rounded-full border-4 border-black 
                  flex items-center justify-center text-2xl font-bold
                  ${item.status === 'complete' ? 'bg-green-400' :
										item.status === 'current' ? 'bg-yellow-400' : 'bg-white'}
                `}>
									{i + 1}
								</div>
								<div className="text-sm font-bold w-24">{item.phase}</div>
							</div>
						))}
					</div>
				</div>

				{/* Final CTA */}
				<div className="max-w-2xl mx-auto">
					<h2 className="text-5xl font-bold mb-6">Turn off airplane mode</h2>
					<p className="text-xl mb-8">
						Join our journey in revolutionizing flight data for pilots and cat owners alike!
					</p>

					<EmailForm />

					{/* Links */}
					<div className="mt-12 flex justify-center gap-4">
						<a
							href="https://github.com/yourusername/sixpack"
							target="_blank"
							rel="noopener noreferrer"
							className="
                px-6 py-3 border-4 border-black bg-white
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-[2px] hover:translate-y-[2px]
                transition-all duration-200 font-bold
              "
						>
							GitHub →
						</a>
						<a
							href="mailto:flight@6pack.cc"
							className="
                px-6 py-3 border-4 border-black bg-[#A6FAFF]
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-[2px] hover:translate-y-[2px]
                transition-all duration-200 font-bold
              "
						>
							Contact →
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}