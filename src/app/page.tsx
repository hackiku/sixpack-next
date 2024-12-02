// ~/app/page.tsx
import HeroSection from "~/app/_components/sections/HeroSection";
import FeaturesSection from "~/app/_components/sections/FeaturesSection";
import CtaSection from "~/app/_components/sections/CtaSection";
import ResponsiveAppDemo from "~/app/_components/demo/ResponsiveAppDemo";

export default function HomePage() {
	return (
		<main className="bg-gray-300/70 overflow-hidden">
			<div
				className="relative min-h-[300vh]"
				style={{
					backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
					backgroundSize: '32px 32px'
				}}
			>
				<HeroSection />
				<FeaturesSection />
				<ResponsiveAppDemo />
				<CtaSection />
			</div>
		</main>
	);
}