// ~/app/_components/layout/MobileMenu.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
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

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/20 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Menu Card */}
			<div className={`
        absolute top-4 left-4 right-4 
        bg-white border-4 border-black rounded-3xl
        p-6 pt-20
        transform transition-all duration-300
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      `}>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="
            absolute top-6 right-6
            w-8 h-8
            flex items-center justify-center
            rounded-full border-2 border-black
            hover:bg-[#FF6B6B]
            transition-colors
          "
				>
					✕
				</button>

				{/* Navigation Links */}
				<div className="space-y-4 mb-8">
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
                block w-full p-4
                text-xl font-bold text-center
                border-4 border-black rounded-2xl
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
				<div className="pt-8 border-t-4 border-black">
					<EmailForm variant="stacked" />
				</div>
			</div>
		</div>
	);
}