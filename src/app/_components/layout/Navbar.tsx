// ~/app/_components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import EmailForm from '../cta/EmailForm';

const NAV_LINKS = [
	{ href: '/hardware', label: 'Device' },
	{ href: '/software', label: 'App' },
	{ href: '/docs', label: 'Docs' }
];

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

	// Close menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	if (pathname === '/redocly') return null;

	return (
		<>
			{/* Backdrop */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
						onClick={() => setIsMenuOpen(false)}
					/>
				)}
			</AnimatePresence>

			<nav className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'py-2 mt-0' : 'py-4 mt-4'}
      `}>
				<div className="container mx-auto px-4">
					<motion.div
						className={`
              relative overflow-hidden
              bg-white
              border-4 border-black rounded-2xl
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-300
              ${isScrolled ? 'md:w-[90%] mx-auto' : 'w-full'}
            `}
					>
						{/* Main Navbar Content */}
						<div className={`
              px-6 py-3 flex justify-between items-center
              ${isMenuOpen ? 'border-b-0' : ''}
            `}>
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
								{NAV_LINKS.map(link => (
									<Link
										key={link.href}
										href={link.href}
										className="
                      px-4 py-2 font-bold
                      border-2 border-black rounded-full
                      hover:bg-[#AE7AFF] hover:scale-105
                      transition-all duration-200
                    "
									>
										{link.label}
									</Link>
								))}
							</div>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className={`
									md:hidden
									w-10 h-10
									flex items-center justify-center
									hover:scale-105
									transition-all duration-200
									${isMenuOpen ? 'bg-[#FF6B6B] border-2 border-black rounded-full' : ''}
								`}
							>
								<div className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5">
									<motion.span
										animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
										className="absolute h-0.5 w-5 bg-black"
									/>
									<motion.span
										animate={{ opacity: isMenuOpen ? 0 : 1 }}
										className="absolute h-0.5 w-5 bg-black"
									/>
									<motion.span
										animate={isMenuOpen ? { rotate: -45, y: 6 } : { rotate: 0, y: 12 }}
										className="absolute h-0.5 w-5 bg-black"
									/>
								</div>
							</button>
						</div>

						{/* Mobile Menu Content */}
						<AnimatePresence>
							{isMenuOpen && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
									className="md:hidden"
								>
									<div className="p-6 space-y-4">
										{NAV_LINKS.map(link => (
											<Link
												key={link.href}
												href={link.href}
												className="
                          block w-full p-4
                          text-xl font-bold text-center
                          border-4 border-black rounded-xl
                          bg-white
                          hover:bg-[#AE7AFF]
                          transition-colors
                        "
											>
												{link.label}
											</Link>
										))}

										{/* Email Form */}
										<div className="pt-6 border-t-4 border-black">
											<EmailForm variant="stacked" />
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</nav>
		</>
	);
}