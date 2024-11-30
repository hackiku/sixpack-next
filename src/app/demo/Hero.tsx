// src/app/demo/Hero.tsx

'use client';

import Button from '~/app/_components/ui/Button';

export default function Hero() {
	const handleDownload = () => {
		window.location.href = 'https://www.dropbox.com/scl/fi/91kdmcmav02wxltglr0d8/app-release.apk?rlkey=vk9y5gco7if5qkx10ay62iiks&st=wol668e3&dl=1';
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