// _components/layout/Navbar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const pathname = usePathname();
	if (pathname === '/redocly') return null;

	return (
		<nav className="p-6 my-6 md:mx-12">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-bold">SixPack</Link>
					<span className="ml-2 inline-block bg-[#A6FAFE] text-xs font-semibold px-2 py-1 border-2 border-black">
						BETA
					</span>
				</div>
				<div className="space-x-4">
					<Link href="/hardware" className="font-semibold border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">
						Device
					</Link>
					<Link href="/software" className="font-semibold border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">
						App
					</Link>
				</div>
			</div>
		</nav>
	);
}

