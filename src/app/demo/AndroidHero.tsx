// src/app/demo/Hero.tsx
'use client';

import Button from '~/app/_components/ui/Button';

export default function Hero() {
	const handleDownload = () => {
		window.location.href = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';
	};

	return (
		<div className="mx-auto max-w-2xl text-center">
			<div className="space-y-6">
				<h1 className="text-4xl font-black text-black uppercase">
					Ready for Takeoff!
				</h1>
				<p className="text-xl text-black">
					Download the Android app to start your journey
				</p>
				<Button
					onClick={handleDownload}
					size="lg"
					withArrow
				>
					Download for Android
				</Button>
			</div>
		</div>
	);
}