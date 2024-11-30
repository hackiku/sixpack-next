// ~/app/_components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (pathname === '/redocly') return null;

	return (
		<>
			<nav className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'py-2 mt-0' : 'py-4 mt-4'}
      `}>
				<div className="container mx-auto px-4">
					<div className={`
            relative
            bg-white rounded-full
            border-4 border-black
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            px-6 py-3
            flex justify-between items-center
            transition-all duration-300
            ${isScrolled ? 'md:w-[90%] mx-auto' : 'w-full'}
          `}>
						{/* Logo */}
						<Link
							href="/"
							className="flex items-center gap-2 hover:scale-105 transition-transform"
						>
							<span className="text-2xl">🦩</span>
							<span className="text-2xl font-black">6Pack</span>
							<span className="
                ml-2 bg-[#A6FAFF] text-xs font-bold px-2 py-1 
                border-2 border-black rounded-full
              ">
								BETA
							</span>
						</Link>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center gap-6">
							<Link
								href="/hardware"
								className="
                  px-4 py-2 font-bold
                  border-2 border-black rounded-full
                  hover:bg-[#AE7AFF] hover:scale-105
                  transition-all duration-200
                "
							>
								Device
							</Link>
							<Link
								href="/software"
								className="
                  px-4 py-2 font-bold
                  border-2 border-black rounded-full
                  hover:bg-[#AE7AFF] hover:scale-105
                  transition-all duration-200
                "
							>
								App
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(true)}
							className="md:hidden p-2 hover:scale-110 transition-transform"
						>
							<div className="w-6 h-0.5 bg-black mb-1.5" />
							<div className="w-6 h-0.5 bg-black mb-1.5" />
							<div className="w-6 h-0.5 bg-black" />
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
			/>
		</>
	);
}