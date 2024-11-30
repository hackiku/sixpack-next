// src/app/demo/page.tsx
'use client';

import { Suspense } from 'react';

function DemoContent() {
	const [showIOSMessage, setShowIOSMessage] = useState(false);
	const searchParams = useSearchParams();

	useEffect(() => {
		const platform = searchParams.get('platform');
		setShowIOSMessage(platform === 'ios');
	}, [searchParams]);

	const handleDownload = () => {
		// TODO: Replace with actual Play Store link
		window.location.href = 'https://play.google.com/store/apps/details?id=your.app.id';
	};

	return (
		<div className="mx-auto max-w-2xl text-center">
			{showIOSMessage ? (
				<div className="space-y-6">
					<h1 className="text-4xl font-black text-black uppercase">
						iOS Version Coming Soon!
					</h1>
					<div className="relative text-xl font-bold p-6 border-4 border-black bg-[#A6FAFF] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
						We&apos;ll send you a TestFlight invite as soon as it&apos;s ready for takeoff!
						<br />
						<span className="text-sm italic mt-2 block">
							(Make sure to check your spam folder)
						</span>
					</div>
				</div>
			) : (
				<div className="space-y-6">
					<h1 className="text-4xl font-black text-black uppercase">
						Ready for Takeoff!
					</h1>
					<p className="text-xl text-black">
						Download the Android app to get started
					</p>
					<button
						onClick={handleDownload}
						className="
              px-8 py-4 text-xl font-bold
              border-4 border-black bg-[#AE7AFF]
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              hover:bg-[#d71e97]
              active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-[2px] active:translate-y-[2px]
              transition-all duration-200
            "
					>
						Download for Android →
					</button>
				</div>
			)}
		</div>
	);
}

// Loading component for Suspense fallback
function DemoLoading() {
	return (
		<div className="mx-auto max-w-2xl text-center">
			<div className="animate-pulse space-y-6">
				<div className="h-12 bg-gray-300 rounded" />
				<div className="h-32 bg-gray-300 rounded" />
			</div>
		</div>
	);
}

export default function DemoPage() {
	return (
		<main className="min-h-screen bg-gray-300/70 relative">
			<div
				className="relative px-6 py-24 sm:py-32 lg:px-8"
				style={{
					backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
					backgroundSize: '32px 32px'
				}}
			>
				<Suspense fallback={<DemoLoading />}>
					<DemoContent />
				</Suspense>
			</div>
		</main>
	);
}

// Add missing imports at the top
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';