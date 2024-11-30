// ~/app/_components/layout/MobileMenu.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import EmailForm from '../cta/EmailForm';

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
	// Prevent scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
						onClick={onClose}
					/>

					{/* Menu Content */}
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="fixed top-[4.5rem] left-4 right-4 z-40 md:hidden"
					>
						<div className="
              bg-white border-4 border-black rounded-2xl
              p-6
              shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            ">
							{/* Navigation Links */}
							<div className="space-y-3 mb-6">
								{[
									{ href: '/hardware', label: 'Device' },
									{ href: '/software', label: 'App' },
									{ href: '/docs', label: 'Docs' },
								].map(link => (
									<Link
										key={link.href}
										href={link.href}
										onClick={onClose}
										className="
                      block w-full p-3
                      text-lg font-bold text-center
                      border-4 border-black rounded-xl
                      bg-white
                      hover:bg-[#AE7AFF]
                      transition-colors
                    "
									>
										{link.label}
									</Link>
								))}
							</div>

							{/* Email Form */}
							<div className="pt-6 border-t-4 border-black">
								<EmailForm variant="stacked" />
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
