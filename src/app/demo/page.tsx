// src/app/demo/page.tsx
'use client';

import { Suspense } from 'react';
import Hero from './Hero';
import IOSDownload from './iOSDownload';
import Footer from '~/app/_components/layout/Footer';

function DemoContent() {
	return (
		<div className="space-y-24">
			<Hero />
			<IOSDownload />
		</div>
	);
}

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
		<main className="min-h-screen bg-gray-300/70 relative flex flex-col">
			<div
				className="flex-grow relative px-6 py-24 sm:py-32 lg:px-8"
				style={{
					backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
					backgroundSize: '32px 32px'
				}}
			>
				<Suspense fallback={<DemoLoading />}>
					<DemoContent />
				</Suspense>
			</div>
			<Footer />
		</main>
	);
}