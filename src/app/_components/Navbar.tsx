// components/Navbar.tsx

import Link from 'next/link';

interface NavbarProps {
	color?: string;
}

const Navbar: React.FC<NavbarProps> = ({ color = '#FFF8EE' }) => {
	return (
		<nav className="p-6 my-6 md:mx-12" style={{ backgroundColor: color }}>
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-bold">SixPack</Link>
					<span className="ml-2 inline-block bg-[#A6FAFE] text-xs font-semibold px-2 py-1 border-2 border-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
						BETA
					</span>
				</div>
				<div className="space-x-4">
					<Link href="/hardware" className="font-semibold border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">Device</Link>
					<Link href="/software" className="font-semibold border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">App</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;